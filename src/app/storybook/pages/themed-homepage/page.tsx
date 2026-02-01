'use client';

import { useState } from 'react';
import { brandThemes, BrandTheme } from '@/lib/brandThemes';
import { colors, spacing, typography, border, font } from '@/lib/designTokens';

// Dropdown Theme Selector Component
function ThemeDropdown({ 
  currentThemeId, 
  onThemeChange 
}: { 
  currentThemeId: string; 
  onThemeChange: (id: string) => void;
}) {
  const currentTheme = brandThemes[currentThemeId];
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.lg,
        padding: spacing.lg,
        backgroundColor: colors.neutral[100],
        borderRadius: border.radius.lg,
        marginBottom: spacing.xl,
      }}
    >
      <label
        htmlFor="theme-select"
        style={{
          ...typography.body.md,
          color: colors.neutral.darkest,
          fontWeight: font.weight.semibold,
        }}
      >
        Select Brand Theme:
      </label>
      <div style={{ position: 'relative', flex: 1, maxWidth: 300 }}>
        <select
          id="theme-select"
          value={currentThemeId}
          onChange={(e) => onThemeChange(e.target.value)}
          style={{
            width: '100%',
            padding: `${spacing.sm}px ${spacing.md}px`,
            paddingRight: spacing['2xl'],
            fontSize: font.size.md,
            fontFamily: font.family.default,
            borderRadius: border.radius.md,
            border: `2px solid ${currentTheme.colors.primary}`,
            backgroundColor: colors.neutral.lightest,
            color: colors.neutral.darkest,
            cursor: 'pointer',
            appearance: 'none',
            fontWeight: font.weight.medium,
          }}
        >
          {Object.entries(brandThemes).map(([id, theme]) => (
            <option key={id} value={id}>
              {theme.name}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div
          style={{
            position: 'absolute',
            right: spacing.md,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke={currentTheme.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Current theme color indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: border.radius.sm,
            backgroundColor: currentTheme.colors.primary,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        />
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: border.radius.sm,
            backgroundColor: currentTheme.colors.secondary,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        />
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: border.radius.sm,
            backgroundColor: currentTheme.colors.strapBg,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        />
      </div>
    </div>
  );
}

// Quick Theme Buttons (for fast switching)
function QuickThemeButtons({ 
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
        gap: spacing.xs,
        marginBottom: spacing.lg,
      }}
    >
      {Object.entries(brandThemes).map(([id, theme]) => (
        <button
          key={id}
          onClick={() => onThemeChange(id)}
          style={{
            padding: `${spacing['2xs']}px ${spacing.sm}px`,
            borderRadius: border.radius.sm,
            border: currentThemeId === id 
              ? `2px solid ${theme.colors.primary}` 
              : `1px solid ${colors.neutral[300]}`,
            backgroundColor: currentThemeId === id 
              ? theme.colors.primary 
              : colors.neutral.lightest,
            color: currentThemeId === id 
              ? '#ffffff' 
              : colors.neutral[700],
            fontWeight: currentThemeId === id ? font.weight.semibold : font.weight.regular,
            fontSize: font.size['2xs'],
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            fontFamily: font.family.default,
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h3 style={{ ...typography.heading.lg, margin: 0, color: colors.neutral.darkest }}>
          {theme.name}
        </h3>
        <span
          style={{
            padding: `${spacing['2xs']}px ${spacing.sm}px`,
            backgroundColor: theme.colors.primary,
            color: '#fff',
            borderRadius: border.radius.sm,
            fontSize: font.size['2xs'],
            fontWeight: font.weight.medium,
          }}
        >
          {theme.id}
        </span>
      </div>
      
      {/* Color Palette */}
      <div style={{ padding: spacing.lg }}>
        <p style={{ ...typography.caption.md, color: colors.neutral[600], marginBottom: spacing.md, fontWeight: font.weight.semibold }}>
          Color Palette
        </p>
        <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
          {[
            { name: 'Primary', color: theme.colors.primary },
            { name: 'Secondary', color: theme.colors.secondary },
            { name: 'Accent', color: theme.colors.accent },
            { name: 'Header BG', color: theme.colors.headerBg },
            { name: 'Strap BG', color: theme.colors.strapBg },
            { name: 'Text', color: theme.colors.text },
            { name: 'Link', color: theme.colors.link },
            { name: 'Border', color: theme.colors.border },
          ].map((item) => (
            <div key={item.name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: item.color,
                  borderRadius: border.radius.md,
                  border: `1px solid ${colors.neutral[300]}`,
                  marginBottom: spacing['2xs'],
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              />
              <span style={{ fontSize: 10, color: colors.neutral[600], display: 'block' }}>{item.name}</span>
              <span style={{ fontSize: 9, color: colors.neutral[500], fontFamily: font.family.mono }}>{item.color}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Typography */}
      <div style={{ padding: spacing.lg, borderTop: `1px solid ${colors.neutral[200]}` }}>
        <p style={{ ...typography.caption.md, color: colors.neutral[600], marginBottom: spacing.md, fontWeight: font.weight.semibold }}>
          Typography
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.lg }}>
          <div>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', letterSpacing: 0.5 }}>Primary Font (Headlines)</span>
            <p style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 18, fontWeight: theme.typography.headerWeight, margin: `${spacing['2xs']}px 0 0`, color: colors.neutral.darkest }}>
              The quick brown fox
            </p>
          </div>
          <div>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', letterSpacing: 0.5 }}>Display Font (Section Headers)</span>
            <p style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 22, fontWeight: theme.typography.headerWeight, margin: `${spacing['2xs']}px 0 0`, color: colors.neutral.darkest }}>
              Headlines & Titles
            </p>
          </div>
        </div>
      </div>
      
      {/* Settings */}
      <div style={{ padding: spacing.lg, borderTop: `1px solid ${colors.neutral[200]}`, backgroundColor: colors.neutral[100] }}>
        <div style={{ display: 'flex', gap: spacing['2xl'] }}>
          <div>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase' }}>Border Radius</span>
            <p style={{ fontSize: 13, margin: `${spacing['2xs']}px 0 0`, color: colors.neutral.darkest }}>
              sm: {theme.borderRadius.sm}px, md: {theme.borderRadius.md}px, lg: {theme.borderRadius.lg}px
            </p>
          </div>
          <div>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase' }}>Spacing Scale</span>
            <p style={{ fontSize: 13, margin: `${spacing['2xs']}px 0 0`, color: colors.neutral.darkest }}>
              {theme.spacing.scale}x
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
            letterSpacing: theme.id === 'harpersBazaar' || theme.id === 'elle' ? 2 : 0,
          }}
        >
          {theme.name.toUpperCase()}
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
          backgroundImage: `
            linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%),
            linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%),
            linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)
          `,
          backgroundSize: '12px 12px',
          backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
        }}
      />
      <div style={{ flex: 1 }}>
        <h4
          style={{
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: 15,
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
            fontSize: 12,
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
          height: 280,
          backgroundColor: theme.colors.surface,
          backgroundImage: `
            linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%),
            linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%),
            linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      />
      <div style={{ padding: spacing.lg }}>
        <span
          style={{
            fontFamily: theme.typography.fontFamily.display,
            fontSize: 12,
            fontWeight: 600,
            color: theme.colors.primary,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {eyebrow}
        </span>
        <h2
          style={{
            fontFamily: theme.typography.fontFamily.primary,
            fontSize: 28,
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
            fontSize: 13,
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
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
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
            <ThemedStoryCard 
              theme={theme} 
              title="Top 10 Things You Need to Know Right Now" 
              timestamp="3 hrs ago" 
            />
          </div>
          
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            <ThemedBigCard
              theme={theme}
              eyebrow="Featured"
              title="The Definitive Guide to Everything You Need to Know About This Topic"
              author="By Editorial Team"
            />
            
            {/* Secondary Cards Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.md, marginTop: spacing.lg }}>
              <div
                style={{
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.borderRadius.md,
                  border: `1px solid ${theme.colors.border}`,
                  padding: spacing.md,
                }}
              >
                <div
                  style={{
                    height: 120,
                    backgroundColor: theme.colors.surface,
                    borderRadius: theme.borderRadius.sm,
                    marginBottom: spacing.sm,
                    backgroundImage: `
                      linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%),
                      linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%),
                      linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)
                    `,
                    backgroundSize: '12px 12px',
                    backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
                  }}
                />
                <span style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 11, color: theme.colors.primary, textTransform: 'uppercase' }}>
                  Category
                </span>
                <h4 style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 15, fontWeight: theme.typography.headerWeight, color: theme.colors.text, margin: `${spacing['2xs']}px 0`, lineHeight: 1.3 }}>
                  Secondary Story Title Here
                </h4>
              </div>
              <div
                style={{
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.borderRadius.md,
                  border: `1px solid ${theme.colors.border}`,
                  padding: spacing.md,
                }}
              >
                <div
                  style={{
                    height: 120,
                    backgroundColor: theme.colors.surface,
                    borderRadius: theme.borderRadius.sm,
                    marginBottom: spacing.sm,
                    backgroundImage: `
                      linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%),
                      linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%),
                      linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)
                    `,
                    backgroundSize: '12px 12px',
                    backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
                  }}
                />
                <span style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 11, color: theme.colors.primary, textTransform: 'uppercase' }}>
                  Reviews
                </span>
                <h4 style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 15, fontWeight: theme.typography.headerWeight, color: theme.colors.text, margin: `${spacing['2xs']}px 0`, lineHeight: 1.3 }}>
                  Another Story Goes Here
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Preview */}
      <div
        style={{
          backgroundColor: theme.colors.headerBg,
          padding: `${spacing.lg}px ${spacing.xl}px`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 16, color: theme.colors.headerText, fontWeight: 600 }}>
          {theme.name}
        </span>
        <span style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 12, color: theme.colors.headerText, opacity: 0.7 }}>
          © 2025 Hearst Magazine Media, Inc.
        </span>
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
          Theme Preview
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 700 }}>
          Preview how the homepage looks with different Hearst brand themes. Each theme includes unique colors, typography, and spacing configurations.
        </p>
      </div>

      {/* Theme Dropdown Selector */}
      <ThemeDropdown 
        currentThemeId={currentThemeId} 
        onThemeChange={setCurrentThemeId} 
      />
      
      {/* Quick Theme Buttons */}
      <QuickThemeButtons 
        currentThemeId={currentThemeId} 
        onThemeChange={setCurrentThemeId} 
      />

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

      {/* Theme Tokens Code */}
      <section style={{ marginTop: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Usage Code
        </h2>
        <div
          style={{
            backgroundColor: colors.neutral.darkest,
            borderRadius: border.radius.lg,
            padding: spacing['2xl'],
            color: colors.neutral.lightest,
          }}
        >
          <pre
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: border.radius.md,
              padding: spacing.lg,
              overflow: 'auto',
              fontSize: 13,
              fontFamily: font.family.mono,
              margin: 0,
            }}
          >
{`import { brandThemes, getTheme } from '@/lib/brandThemes';

// Get the ${currentTheme.name} theme
const theme = getTheme('${currentThemeId}');

// Colors
theme.colors.primary     // ${currentTheme.colors.primary}
theme.colors.secondary   // ${currentTheme.colors.secondary}
theme.colors.strapBg     // ${currentTheme.colors.strapBg}
theme.colors.headerBg    // ${currentTheme.colors.headerBg}

// Typography
theme.typography.fontFamily.primary   // Headlines & body
theme.typography.fontFamily.display   // Section headers
theme.typography.headerWeight         // ${currentTheme.typography.headerWeight}

// Border Radius
theme.borderRadius.sm    // ${currentTheme.borderRadius.sm}px
theme.borderRadius.md    // ${currentTheme.borderRadius.md}px
theme.borderRadius.lg    // ${currentTheme.borderRadius.lg}px`}
          </pre>
        </div>
      </section>
    </div>
  );
}
