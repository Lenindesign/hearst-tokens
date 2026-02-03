'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { BrandTheme, brandThemes, defaultTheme, getTheme } from './brandThemes';

interface ThemeContextType {
  theme: BrandTheme;
  themeId: string;
  setThemeById: (id: string) => void;
  availableThemes: { id: string; name: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialThemeId?: string;
}

/**
 * Convert camelCase theme ID to kebab-case for CSS data-theme attribute
 * e.g., "carAndDriver" -> "car-and-driver"
 */
function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function ThemeProvider({ children, initialThemeId = 'carAndDriver' }: ThemeProviderProps) {
  const [themeId, setThemeId] = useState(initialThemeId);
  const [theme, setTheme] = useState<BrandTheme>(getTheme(initialThemeId));

  // Update the data-theme attribute on the document when theme changes
  // This enables shadcn/ui CSS variable theming
  useEffect(() => {
    const kebabThemeId = toKebabCase(themeId);
    document.documentElement.setAttribute('data-theme', kebabThemeId);
  }, [themeId]);

  const setThemeById = useCallback((id: string) => {
    const newTheme = getTheme(id);
    setThemeId(id);
    setTheme(newTheme);
  }, []);

  const availableThemes = Object.entries(brandThemes).map(([id, theme]) => ({
    id,
    name: theme.name,
  }));

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeById, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Hook to get CSS variables from theme
export function useThemeStyles(theme: BrandTheme) {
  return {
    '--theme-primary': theme.colors.primary,
    '--theme-secondary': theme.colors.secondary,
    '--theme-accent': theme.colors.accent,
    '--theme-background': theme.colors.background,
    '--theme-surface': theme.colors.surface,
    '--theme-text': theme.colors.text,
    '--theme-text-secondary': theme.colors.textSecondary,
    '--theme-header-bg': theme.colors.headerBg,
    '--theme-header-text': theme.colors.headerText,
    '--theme-strap-bg': theme.colors.strapBg,
    '--theme-strap-text': theme.colors.strapText,
    '--theme-link': theme.colors.link,
    '--theme-link-hover': theme.colors.linkHover,
    '--theme-border': theme.colors.border,
    '--theme-font-primary': theme.typography.fontFamily.primary,
    '--theme-font-secondary': theme.typography.fontFamily.secondary,
    '--theme-font-display': theme.typography.fontFamily.display,
    '--theme-header-weight': theme.typography.headerWeight,
    '--theme-body-weight': theme.typography.bodyWeight,
    '--theme-spacing-scale': theme.spacing.scale,
    '--theme-radius-sm': `${theme.borderRadius.sm}px`,
    '--theme-radius-md': `${theme.borderRadius.md}px`,
    '--theme-radius-lg': `${theme.borderRadius.lg}px`,
  } as React.CSSProperties;
}

export default ThemeContext;
