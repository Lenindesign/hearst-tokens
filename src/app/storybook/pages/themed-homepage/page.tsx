'use client';

import { useState } from 'react';
import { brandThemes, BrandTheme } from '@/lib/brandThemes';
import { colors, spacing, typography, border, font } from '@/lib/designTokens';

// Theme Selector Component
function ThemeSelector({ 
  currentThemeId, 
  onThemeChange 
}: { 
  currentThemeId: string; 
  onThemeChange: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing.sm,
        padding: spacing.lg,
        backgroundColor: colors.neutral[100],
        borderRadius: border.radius.lg,
        marginBottom: spacing.xl,
      }}
    >
      {Object.entries(brandThemes).map(([id, theme]) => (
        <button
          key={id}
          onClick={() => onThemeChange(id)}
          style={{
            padding: `${spacing.sm}px ${spacing.md}px`,
            borderRadius: border.radius.md,
            border: currentThemeId === id 
              ? `2px solid ${theme.colors.primary}` 
              : `1px solid ${colors.neutral[300]}`,
            backgroundColor: currentThemeId === id 
              ? theme.colors.primary 
              : colors.neutral.lightest,
            color: currentThemeId === id 
              ? '#ffffff' 
              : colors.neutral.darkest,
            fontWeight: currentThemeId === id ? 600 : 400,
            fontSize: 13,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}

// Theme Preview Card
function ThemePreviewCard({ theme }: { theme: BrandTheme }) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        overflow: 'hidden',
        marginBottom: spacing.xl,
      }}
    >
      <div
        style={{
          padding: spacing.lg,
          borderBottom: `1px solid ${colors.neutral[300]}`,
        }}
      >
        <h3 style={{ ...typography.heading.lg, margin: 0, color: colors.neutral.darkest }}>
          Theme: {theme.name}
        </h3>
      </div>
      
      {/* Color Palette */}
      <div style={{ padding: spacing.lg }}>
        <p style={{ ...typography.caption.md, color: colors.neutral[600], marginBottom: spacing.md }}>
          Color Palette
        </p>
        <div style={{ display: 'flex', gap: spacing.xs, flexWrap: 'wrap' }}>
          {[
            { name: 'Primary', color: theme.colors.primary },
            { name: 'Secondary', color: theme.colors.secondary },
            { name: 'Accent', color: theme.colors.accent },
            { name: 'Header', color: theme.colors.headerBg },
            { name: 'Strap', color: theme.colors.strapBg },
            { name: 'Text', color: theme.colors.text },
            { name: 'Link', color: theme.colors.link },
          ].map((item) => (
            <div key={item.name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: item.color,
                  borderRadius: border.radius.sm,
                  border: `1px solid ${colors.neutral[300]}`,
                  marginBottom: spacing['2xs'],
                }}
              />
              <span style={{ fontSize: 10, color: colors.neutral[600] }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Typography */}
      <div style={{ padding: spacing.lg, borderTop: `1px solid ${colors.neutral[200]}` }}>
        <p style={{ ...typography.caption.md, color: colors.neutral[600], marginBottom: spacing.md }}>
          Typography
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          <div>
            <span style={{ fontSize: 10, color: colors.neutral[500] }}>Primary Font:</span>
            <p style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 16, margin: `${spacing['2xs']}px 0 0` }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <span style={{ fontSize: 10, color: colors.neutral[500] }}>Display Font:</span>
            <p style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 24, fontWeight: theme.typography.headerWeight, margin: `${spacing['2xs']}px 0 0` }}>
              Headlines & Titles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Themed Navigation Preview
function ThemedNavigation({ theme }: { theme: BrandTheme }) {
  return (
    <nav
      style={{
        backgroundColor: theme.colors.headerBg,
        padding: `${spacing.md}px ${spacing.lg}px`,
        borderRadius: `${theme.borderRadius.lg}px ${theme.borderRadius.lg}px 0 0`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: theme.typography.fontFamily.display,
            fontSize: 24,
            fontWeight: theme.typography.headerWeight,
            color: theme.colors.headerText,
          }}
        >
          {theme.name}
        </span>
        <div style={{ display: 'flex', gap: spacing.lg }}>
          {['News', 'Features', 'Reviews', 'More'].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: theme.typography.fontFamily.primary,
                fontSize: 14,
                color: theme.colors.headerText,
                cursor: 'pointer',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Themed Strap/Header
function ThemedStrap({ theme, title }: { theme: BrandTheme; title: string }) {
  return (
    <div
      style={{
        backgroundColor: theme.colors.strapBg,
        padding: `${spacing.sm}px ${spacing.md}px`,
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: theme.typography.fontFamily.display,
          fontSize: 18,
          fontWeight: 600,
          color: theme.colors.strapText,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        {title}
      </span>
    </div>
  );
}

// Themed Story Card
function ThemedStoryCard({ theme, title, timestamp }: { theme: BrandTheme; title: string; timestamp: string }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: spacing.md,
        padding: spacing.md,
        backgroundColor: theme.colors.background,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: theme.colors.surface,
          borderRadius: theme.borderRadius.sm,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <h4
          style={{
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: 16,
            fontWeight: theme.typography.headerWeight,
            color: theme.colors.text,
            margin: 0,
            marginBottom: spacing.xs,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h4>
        <span
          style={{
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: 13,
            color: theme.colors.link,
          }}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
}

// Themed Big Card
function ThemedBigCard({ theme, eyebrow, title, author }: { theme: BrandTheme; eyebrow: string; title: string; author: string }) {
  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.lg,
        overflow: 'hidden',
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <div
        style={{
          height: 300,
          backgroundColor: theme.colors.surface,
        }}
      />
      <div style={{ padding: spacing.lg }}>
        <span
          style={{
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: 13,
            fontWeight: 600,
            color: theme.colors.primary,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {eyebrow}
        </span>
        <h2
          style={{
            fontFamily: theme.typography.fontFamily.display,
            fontSize: 32,
            fontWeight: theme.typography.headerWeight,
            color: theme.colors.text,
            margin: `${spacing.sm}px 0`,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <span
          style={{
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: 14,
            color: theme.colors.textSecondary,
          }}
        >
          {author}
        </span>
      </div>
    </div>
  );
}

// Themed Homepage Preview
function ThemedHomepagePreview({ theme }: { theme: BrandTheme }) {
  return (
    <div
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: border.radius.lg,
        overflow: 'hidden',
        border: `1px solid ${colors.neutral[300]}`,
      }}
    >
      {/* Navigation */}
      <ThemedNavigation theme={theme} />
      
      {/* Content */}
      <div style={{ padding: spacing.lg, backgroundColor: theme.colors.background }}>
        <div style={{ display: 'flex', gap: spacing.xl }}>
          {/* Left Sidebar */}
          <div style={{ width: 280, flexShrink: 0 }}>
            <ThemedStrap theme={theme} title="Latest News" />
            <ThemedStoryCard 
              theme={theme} 
              title="Breaking: Major Industry News Announced Today" 
              timestamp="19 mins ago" 
            />
            <ThemedStoryCard 
              theme={theme} 
              title="Expert Analysis: What This Means For You" 
              timestamp="1 hr ago" 
            />
            <ThemedStoryCard 
              theme={theme} 
              title="Exclusive Interview With Industry Leader" 
              timestamp="2 hrs ago" 
            />
          </div>
          
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            <ThemedBigCard
              theme={theme}
              eyebrow="Featured"
              title="The Definitive Guide to Everything You Need to Know"
              author="By Editorial Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Page Component
export default function ThemedHomepagePage() {
  const [currentThemeId, setCurrentThemeId] = useState('carAndDriver');
  const currentTheme = brandThemes[currentThemeId];

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1400, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['2xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Themed Homepage Preview
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 700 }}>
          Preview how the homepage looks with different brand themes. Each theme includes unique colors, typography, and spacing.
        </p>
      </div>

      {/* Theme Selector */}
      <section style={{ marginBottom: spacing['2xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.md }}>
          Select a Brand Theme
        </h2>
        <ThemeSelector 
          currentThemeId={currentThemeId} 
          onThemeChange={setCurrentThemeId} 
        />
      </section>

      {/* Theme Details */}
      <section style={{ marginBottom: spacing['2xl'] }}>
        <ThemePreviewCard theme={currentTheme} />
      </section>

      {/* Homepage Preview */}
      <section>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Homepage Preview
        </h2>
        <ThemedHomepagePreview theme={currentTheme} />
      </section>

      {/* Theme Tokens */}
      <section style={{ marginTop: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Theme Tokens
        </h2>
        <div
          style={{
            backgroundColor: colors.neutral.darkest,
            borderRadius: border.radius.lg,
            padding: spacing['2xl'],
            color: colors.neutral.lightest,
          }}
        >
          <h3 style={{ ...typography.heading.md, margin: 0, marginBottom: spacing.md }}>
            Usage
          </h3>
          <pre
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: border.radius.md,
              padding: spacing.lg,
              overflow: 'auto',
              fontSize: 13,
              fontFamily: font.family.mono,
            }}
          >
{`import { brandThemes, getTheme } from '@/lib/brandThemes';
import { ThemeProvider, useTheme } from '@/lib/ThemeContext';

// Get a specific theme
const theme = getTheme('${currentThemeId}');

// Use theme colors
const primaryColor = theme.colors.primary; // ${currentTheme.colors.primary}
const headerBg = theme.colors.headerBg;    // ${currentTheme.colors.headerBg}

// Use theme typography
const fontFamily = theme.typography.fontFamily.primary;
// ${currentTheme.typography.fontFamily.primary}

// Wrap your app with ThemeProvider
<ThemeProvider initialThemeId="${currentThemeId}">
  <App />
</ThemeProvider>

// Access theme in components
function MyComponent() {
  const { theme, setThemeById } = useTheme();
  return <div style={{ color: theme.colors.primary }}>...</div>;
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
