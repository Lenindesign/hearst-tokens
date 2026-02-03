'use client';

import { useState } from 'react';
import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { brandThemes, BrandTheme } from '@/lib/brandThemes';
import { CarAndDriverHomepage } from '@/components/CarAndDriverHomepage';

// Theme Dropdown Selector
function ThemeSelector({ 
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
          whiteSpace: 'nowrap',
        }}
      >
        Brand Theme:
      </label>
      <div style={{ position: 'relative', flex: 1, maxWidth: 280 }}>
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
      
      {/* Color swatches */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
        {[currentTheme.colors.primary, currentTheme.colors.secondary, currentTheme.colors.strapBg].map((color, i) => (
          <div
            key={i}
            style={{
              width: 24,
              height: 24,
              borderRadius: border.radius.sm,
              backgroundColor: color,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Quick Theme Buttons
function QuickThemeButtons({ 
  currentThemeId, 
  onThemeChange 
}: { 
  currentThemeId: string; 
  onThemeChange: (id: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xs, marginBottom: spacing.lg }}>
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
            color: currentThemeId === id ? '#ffffff' : colors.neutral[700],
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

// Theme Info Card
function ThemeInfoCard({ theme }: { theme: BrandTheme }) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        padding: spacing.lg,
        marginBottom: spacing.xl,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.md }}>
        <h3 style={{ ...typography.heading.md, margin: 0, color: colors.neutral.darkest }}>
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
      
      {/* Color Palette - All Official Car and Driver Brand Colors */}
      <div style={{ marginBottom: spacing.md }}>
        <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', display: 'block', marginBottom: spacing.xs }}>
          Primary Colors
        </span>
        <div style={{ display: 'flex', gap: spacing.sm, flexWrap: 'wrap', marginBottom: spacing.md }}>
          {[
            { name: 'Dark Grey', color: '#222222' },
            { name: 'Dark Blue', color: '#1B5F8A' },
            { name: 'Gold', color: '#DBCA8B' },
            { name: 'Light Orange', color: '#F7E4CA' },
            { name: 'Light Grey', color: '#F5F5F5' },
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
                title={item.color}
              />
              <span style={{ fontSize: 9, color: colors.neutral[600], display: 'block' }}>{item.name}</span>
              <span style={{ fontSize: 8, color: colors.neutral[500], fontFamily: 'monospace' }}>{item.color}</span>
            </div>
          ))}
        </div>
        
        <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', display: 'block', marginBottom: spacing.xs }}>
          Secondary Colors
        </span>
        <div style={{ display: 'flex', gap: spacing.sm, flexWrap: 'wrap' }}>
          {[
            { name: 'Red', color: '#D2232A' },
            { name: 'Green', color: '#26870D' },
            { name: 'Dark Gold', color: '#A59143' },
            { name: 'Light Blue', color: '#F1F7F7' },
            { name: 'White', color: '#FFFFFF' },
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
                title={item.color}
              />
              <span style={{ fontSize: 9, color: colors.neutral[600], display: 'block' }}>{item.name}</span>
              <span style={{ fontSize: 8, color: colors.neutral[500], fontFamily: 'monospace' }}>{item.color}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Typography - Car and Driver Fonts */}
      <div>
        <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', display: 'block', marginBottom: spacing.sm }}>
          Typography
        </span>
        <div style={{ display: 'flex', gap: spacing['2xl'], flexWrap: 'wrap' }}>
          {/* Inter - Headlines & Body */}
          <div style={{ 
            padding: spacing.md, 
            backgroundColor: colors.neutral[100], 
            borderRadius: border.radius.md,
            minWidth: 200,
          }}>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', display: 'block', marginBottom: spacing.xs }}>
              Inter
            </span>
            <p style={{ 
              fontFamily: 'var(--font-inter), Inter, -apple-system, sans-serif', 
              fontSize: 24, 
              fontWeight: 700, 
              margin: 0, 
              color: colors.neutral.darkest,
              lineHeight: 1.2,
            }}>
              Headlines & Body
            </p>
            <p style={{ 
              fontFamily: 'var(--font-inter), Inter, -apple-system, sans-serif', 
              fontSize: 14, 
              fontWeight: 400, 
              margin: `${spacing.xs}px 0 0`, 
              color: colors.neutral[600],
            }}>
              Used for article titles, body text, and UI elements
            </p>
          </div>
          
          {/* Barlow Condensed - Section Headers & Eyebrows */}
          <div style={{ 
            padding: spacing.md, 
            backgroundColor: colors.neutral[100], 
            borderRadius: border.radius.md,
            minWidth: 200,
          }}>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', display: 'block', marginBottom: spacing.xs }}>
              Barlow Condensed
            </span>
            <p style={{ 
              fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif', 
              fontSize: 28, 
              fontWeight: 600, 
              margin: 0, 
              color: colors.neutral.darkest,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}>
              Section Headers
            </p>
            <p style={{ 
              fontFamily: 'var(--font-inter), Inter, -apple-system, sans-serif', 
              fontSize: 14, 
              fontWeight: 400, 
              margin: `${spacing.xs}px 0 0`, 
              color: colors.neutral[600],
            }}>
              Used for section titles, eyebrows, and navigation
            </p>
          </div>
          
          {/* Lora - Serif/Secondary */}
          <div style={{ 
            padding: spacing.md, 
            backgroundColor: colors.neutral[100], 
            borderRadius: border.radius.md,
            minWidth: 200,
          }}>
            <span style={{ fontSize: 10, color: colors.neutral[500], textTransform: 'uppercase', display: 'block', marginBottom: spacing.xs }}>
              Lora
            </span>
            <p style={{ 
              fontFamily: 'var(--font-lora), Lora, Georgia, serif', 
              fontSize: 22, 
              fontWeight: 400, 
              fontStyle: 'italic',
              margin: 0, 
              color: colors.neutral.darkest,
              lineHeight: 1.3,
            }}>
              Editorial & Quotes
            </p>
            <p style={{ 
              fontFamily: 'var(--font-inter), Inter, -apple-system, sans-serif', 
              fontSize: 14, 
              fontWeight: 400, 
              margin: `${spacing.xs}px 0 0`, 
              color: colors.neutral[600],
            }}>
              Used for pull quotes and editorial content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Themed Homepage Preview Components
function ThemedNavigation({ theme }: { theme: BrandTheme }) {
  return (
    <nav
      style={{
        backgroundColor: theme.colors.headerBg,
        padding: `${spacing.md}px ${spacing.lg}px`,
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
          backgroundImage: `linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%), linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%), linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)`,
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
        <span style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 12, color: theme.colors.link }}>
          {timestamp}
        </span>
      </div>
    </div>
  );
}

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
          backgroundImage: `linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%), linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%), linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)`,
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
        <span style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 13, color: theme.colors.textSecondary }}>
          {author}
        </span>
      </div>
    </div>
  );
}

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
      <ThemedNavigation theme={theme} />
      
      <div style={{ padding: spacing.lg, backgroundColor: theme.colors.background }}>
        <div style={{ display: 'flex', gap: spacing.xl }}>
          {/* Left Sidebar */}
          <div style={{ width: 280, flexShrink: 0 }}>
            <ThemedStrap theme={theme} title="Latest News" />
            <ThemedStoryCard theme={theme} title="Breaking: Major Industry News Announced Today" timestamp="19 mins ago" />
            <ThemedStoryCard theme={theme} title="Expert Analysis: What This Means For You" timestamp="1 hr ago" />
            <ThemedStoryCard theme={theme} title="Exclusive Interview With Industry Leader" timestamp="2 hrs ago" />
            <ThemedStoryCard theme={theme} title="Top 10 Things You Need to Know" timestamp="3 hrs ago" />
          </div>
          
          {/* Main Content */}
          <div style={{ flex: 1 }}>
            <ThemedBigCard
              theme={theme}
              eyebrow="Featured"
              title="The Definitive Guide to Everything You Need to Know About This Topic"
              author="By Editorial Team"
            />
            
            {/* Secondary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.md, marginTop: spacing.lg }}>
              {['Category', 'Reviews'].map((cat) => (
                <div
                  key={cat}
                  style={{
                    backgroundColor: theme.colors.background,
                    borderRadius: theme.borderRadius.md,
                    border: `1px solid ${theme.colors.border}`,
                    padding: spacing.md,
                  }}
                >
                  <div
                    style={{
                      height: 100,
                      backgroundColor: theme.colors.surface,
                      borderRadius: theme.borderRadius.sm,
                      marginBottom: spacing.sm,
                      backgroundImage: `linear-gradient(45deg, ${theme.colors.border} 25%, transparent 25%), linear-gradient(-45deg, ${theme.colors.border} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${theme.colors.border} 75%), linear-gradient(-45deg, transparent 75%, ${theme.colors.border} 75%)`,
                      backgroundSize: '12px 12px',
                      backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
                    }}
                  />
                  <span style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 11, color: theme.colors.primary, textTransform: 'uppercase' }}>
                    {cat}
                  </span>
                  <h4 style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 14, fontWeight: theme.typography.headerWeight, color: theme.colors.text, margin: `${spacing['2xs']}px 0`, lineHeight: 1.3 }}>
                    Secondary Story Title Here
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div
        style={{
          backgroundColor: theme.colors.headerBg,
          padding: `${spacing.md}px ${spacing.xl}px`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: theme.typography.fontFamily.display, fontSize: 14, color: theme.colors.headerText, fontWeight: 600 }}>
          {theme.name}
        </span>
        <span style={{ fontFamily: theme.typography.fontFamily.primary, fontSize: 11, color: theme.colors.headerText, opacity: 0.7 }}>
          © 2025 Hearst Magazine Media, Inc.
        </span>
      </div>
    </div>
  );
}

export default function HomepageExamplePage() {
  const [currentThemeId, setCurrentThemeId] = useState('carAndDriver');
  const currentTheme = brandThemes[currentThemeId];

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1600, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['2xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Homepage Theme Preview
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 700 }}>
          Preview how the homepage looks with different Hearst brand themes. Select a theme from the dropdown or click the quick buttons below.
        </p>
      </div>

      {/* Theme Selector */}
      <ThemeSelector currentThemeId={currentThemeId} onThemeChange={setCurrentThemeId} />
      
      {/* Quick Theme Buttons */}
      <QuickThemeButtons currentThemeId={currentThemeId} onThemeChange={setCurrentThemeId} />

      {/* Theme Info */}
      <ThemeInfoCard theme={currentTheme} />

      {/* Components Used */}
      <section style={{ marginBottom: spacing['2xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.md }}>
          Components Used
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
          {[
            'MainNavigation',
            'BigCard',
            'LeftSidebarColumn',
            'RightSidebarColumn',
            'FeedBlockSection',
            'FourAcrossGrid',
            'SeoBlockGrid',
            'Footer',
          ].map((component) => (
            <span
              key={component}
              style={{
                padding: `${spacing['2xs']}px ${spacing.md}px`,
                backgroundColor: colors.alert.info[100],
                color: colors.alert.info[700],
                borderRadius: border.radius.full,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {component}
            </span>
          ))}
        </div>
      </section>

      {/* Full Homepage Preview */}
      {currentThemeId === 'carAndDriver' ? (
        <section>
          <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
            Full Car & Driver Homepage
          </h2>
          <div
            style={{
              backgroundColor: colors.neutral[300],
              borderRadius: border.radius.lg,
              overflow: 'hidden',
              border: `1px solid ${colors.neutral[400]}`,
            }}
          >
            <div
              style={{
                transform: 'scale(0.75)',
                transformOrigin: 'top left',
                width: '133.33%',
                height: 'auto',
              }}
            >
              <CarAndDriverHomepage />
            </div>
          </div>
          <p style={{ ...typography.caption.md, color: colors.neutral[500], marginTop: spacing.md, textAlign: 'center' }}>
            Preview shown at 75% scale. View full page at <a href="/homepage" style={{ color: colors.alert.info[600] }}>/homepage</a>
          </p>
        </section>
      ) : (
        <section style={{ marginBottom: spacing['3xl'] }}>
          <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
            {currentTheme.name} Preview
          </h2>
          <ThemedHomepagePreview theme={currentTheme} />
        </section>
      )}
    </div>
  );
}
