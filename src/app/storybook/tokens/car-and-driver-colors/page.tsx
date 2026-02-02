'use client';

import { colors, spacing, typography, border } from '@/lib/designTokens';

// Car and Driver Official Brand Colors
const carAndDriverColors = {
  primary: [
    { name: 'Dark Grey', value: '#222222', description: 'Primary dark color for text and backgrounds' },
    { name: 'Dark Blue', value: '#1B5F8A', description: 'Primary brand blue for links and accents' },
    { name: 'Gold', value: '#DBCA8B', description: 'Signature gold for highlights and premium elements' },
    { name: 'Light Orange', value: '#F7E4CA', description: 'Warm background color for sections' },
    { name: 'Light Grey', value: '#F5F5F5', description: 'Light background for cards and containers' },
  ],
  secondary: [
    { name: 'Red', value: '#D2232A', description: 'Alert and emphasis color' },
    { name: 'Green', value: '#26870D', description: 'Success states and positive indicators' },
    { name: 'Dark Gold', value: '#A59143', description: 'Secondary gold for subtle accents' },
    { name: 'Light Blue', value: '#F1F7F7', description: 'Subtle blue tint for backgrounds' },
    { name: 'White', value: '#FFFFFF', description: 'Pure white for clean backgrounds' },
  ],
};

// Color Swatch Component
interface ColorSwatchProps {
  name: string;
  value: string;
  description: string;
}

function ColorSwatch({ name, value, description }: ColorSwatchProps) {
  const isLight = ['#F5F5F5', '#F7E4CA', '#F1F7F7', '#FFFFFF', '#DBCA8B'].includes(value.toUpperCase());
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: border.radius.lg,
        overflow: 'hidden',
        border: `1px solid ${colors.neutral[300]}`,
        backgroundColor: colors.neutral.lightest,
      }}
    >
      {/* Color Preview */}
      <div
        style={{
          height: 120,
          backgroundColor: value,
          border: isLight ? `1px solid ${colors.neutral[300]}` : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: spacing.xs,
        }}
      >
        <span style={{ 
          color: isLight ? colors.neutral.darkest : colors.neutral.lightest,
          fontFamily: 'monospace',
          fontSize: 16,
          fontWeight: 700,
        }}>
          {value}
        </span>
      </div>
      
      {/* Color Info */}
      <div style={{ padding: spacing.lg }}>
        <p style={{ 
          ...typography.heading.sm, 
          color: colors.neutral.darkest, 
          margin: 0,
          marginBottom: spacing.xs,
        }}>
          {name}
        </p>
        <p style={{ 
          ...typography.body.sm, 
          color: colors.neutral[600], 
          margin: 0,
          lineHeight: 1.4,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Large Color Card for hero display
interface HeroColorCardProps {
  name: string;
  value: string;
}

function HeroColorCard({ name, value }: HeroColorCardProps) {
  const isLight = ['#F5F5F5', '#F7E4CA', '#F1F7F7', '#FFFFFF', '#DBCA8B'].includes(value.toUpperCase());
  
  return (
    <div
      style={{
        flex: 1,
        minWidth: 150,
        height: 100,
        backgroundColor: value,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        border: isLight ? `1px solid ${colors.neutral[300]}` : 'none',
      }}
    >
      <span style={{ 
        color: isLight ? colors.neutral.darkest : colors.neutral.lightest,
        fontSize: 14,
        fontWeight: 700,
      }}>
        {name}
      </span>
      <span style={{ 
        color: isLight ? colors.neutral[600] : 'rgba(255,255,255,0.8)',
        fontFamily: 'monospace',
        fontSize: 12,
      }}>
        {value}
      </span>
    </div>
  );
}

export default function CarAndDriverColorsPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg, marginBottom: spacing.md }}>
          <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
            Car and Driver
          </h1>
          <span style={{
            backgroundColor: '#1B5F8A',
            color: '#FFFFFF',
            padding: `${spacing['2xs']}px ${spacing.md}px`,
            borderRadius: border.radius.full,
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Brand Colors
          </span>
        </div>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: 0, maxWidth: 700 }}>
          The official color palette for Car and Driver brand. These colors define the visual identity 
          and should be used consistently across all digital products and marketing materials.
        </p>
      </div>

      {/* Hero Color Strip */}
      <section style={{ marginBottom: spacing['4xl'] }}>
        <div
          style={{
            display: 'flex',
            borderRadius: border.radius.lg,
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
        >
          {carAndDriverColors.primary.map((color) => (
            <HeroColorCard key={color.name} name={color.name} value={color.value} />
          ))}
        </div>
      </section>

      {/* Primary Colors Section */}
      <section style={{ marginBottom: spacing['4xl'] }}>
        <h2 style={{ 
          ...typography.heading.xl, 
          color: colors.neutral.darkest, 
          marginBottom: spacing.md,
          paddingBottom: spacing.md, 
          borderBottom: `1px solid ${colors.neutral[300]}` 
        }}>
          Primary Colors
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          The core colors that define the Car and Driver brand. Use these for primary UI elements, 
          headlines, and key visual components.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: spacing.lg,
          }}
        >
          {carAndDriverColors.primary.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </div>
      </section>

      {/* Secondary Colors Section */}
      <section style={{ marginBottom: spacing['4xl'] }}>
        <h2 style={{ 
          ...typography.heading.xl, 
          color: colors.neutral.darkest, 
          marginBottom: spacing.md,
          paddingBottom: spacing.md, 
          borderBottom: `1px solid ${colors.neutral[300]}` 
        }}>
          Secondary Colors
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          Supporting colors for alerts, success states, and additional visual hierarchy. 
          Use sparingly to maintain brand consistency.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: spacing.lg,
          }}
        >
          {carAndDriverColors.secondary.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name}
              value={color.value}
              description={color.description}
            />
          ))}
        </div>
      </section>

      {/* Color Combinations */}
      <section style={{ marginBottom: spacing['4xl'] }}>
        <h2 style={{ 
          ...typography.heading.xl, 
          color: colors.neutral.darkest, 
          marginBottom: spacing.md,
          paddingBottom: spacing.md, 
          borderBottom: `1px solid ${colors.neutral[300]}` 
        }}>
          Recommended Combinations
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          Approved color pairings that maintain readability and brand consistency.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
          {/* Combination 1: Dark Grey + Gold */}
          <div
            style={{
              display: 'flex',
              borderRadius: border.radius.lg,
              overflow: 'hidden',
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: '#222222',
                padding: spacing['2xl'],
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.md,
              }}
            >
              <span style={{ color: '#DBCA8B', fontSize: 24, fontWeight: 700 }}>
                Premium Content
              </span>
              <span style={{ color: '#FFFFFF', fontSize: 14 }}>
                Dark Grey background with Gold accent text creates a premium, automotive feel.
              </span>
            </div>
            <div
              style={{
                width: 200,
                backgroundColor: '#DBCA8B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#222222', fontWeight: 700 }}>Gold Accent</span>
            </div>
          </div>

          {/* Combination 2: Dark Blue + Light Grey */}
          <div
            style={{
              display: 'flex',
              borderRadius: border.radius.lg,
              overflow: 'hidden',
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: '#F5F5F5',
                padding: spacing['2xl'],
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.md,
              }}
            >
              <span style={{ color: '#1B5F8A', fontSize: 24, fontWeight: 700 }}>
                Editorial Content
              </span>
              <span style={{ color: '#222222', fontSize: 14 }}>
                Light Grey background with Dark Blue headlines for clean, readable articles.
              </span>
            </div>
            <div
              style={{
                width: 200,
                backgroundColor: '#1B5F8A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Dark Blue</span>
            </div>
          </div>

          {/* Combination 3: Light Orange + Dark Grey */}
          <div
            style={{
              display: 'flex',
              borderRadius: border.radius.lg,
              overflow: 'hidden',
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: '#F7E4CA',
                padding: spacing['2xl'],
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.md,
              }}
            >
              <span style={{ color: '#222222', fontSize: 24, fontWeight: 700 }}>
                Featured Section
              </span>
              <span style={{ color: '#222222', fontSize: 14 }}>
                Light Orange background creates warmth for featured content and callouts.
              </span>
            </div>
            <div
              style={{
                width: 200,
                backgroundColor: '#222222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#F7E4CA', fontWeight: 700 }}>Dark Grey</span>
            </div>
          </div>
        </div>
      </section>

      {/* UI Examples */}
      <section style={{ marginBottom: spacing['4xl'] }}>
        <h2 style={{ 
          ...typography.heading.xl, 
          color: colors.neutral.darkest, 
          marginBottom: spacing.md,
          paddingBottom: spacing.md, 
          borderBottom: `1px solid ${colors.neutral[300]}` 
        }}>
          UI Examples
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          Common UI patterns using the Car and Driver color palette.
        </p>

        <div
          style={{
            backgroundColor: colors.neutral[100],
            padding: spacing['2xl'],
            borderRadius: border.radius.lg,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          {/* Buttons */}
          <div style={{ marginBottom: spacing['2xl'] }}>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.md, fontWeight: 600 }}>
              Buttons
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md }}>
              <button
                style={{
                  backgroundColor: '#222222',
                  color: '#FFFFFF',
                  padding: `${spacing.sm}px ${spacing.xl}px`,
                  borderRadius: border.radius.md,
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Primary (Dark Grey)
              </button>
              <button
                style={{
                  backgroundColor: '#1B5F8A',
                  color: '#FFFFFF',
                  padding: `${spacing.sm}px ${spacing.xl}px`,
                  borderRadius: border.radius.md,
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Secondary (Dark Blue)
              </button>
              <button
                style={{
                  backgroundColor: '#DBCA8B',
                  color: '#222222',
                  padding: `${spacing.sm}px ${spacing.xl}px`,
                  borderRadius: border.radius.md,
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Accent (Gold)
              </button>
              <button
                style={{
                  backgroundColor: '#D2232A',
                  color: '#FFFFFF',
                  padding: `${spacing.sm}px ${spacing.xl}px`,
                  borderRadius: border.radius.md,
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Alert (Red)
              </button>
            </div>
          </div>

          {/* Badges */}
          <div style={{ marginBottom: spacing['2xl'] }}>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.md, fontWeight: 600 }}>
              Badges & Tags
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
              <span
                style={{
                  backgroundColor: '#1B5F8A',
                  color: '#FFFFFF',
                  padding: `${spacing['2xs']}px ${spacing.sm}px`,
                  borderRadius: border.radius.full,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Review
              </span>
              <span
                style={{
                  backgroundColor: '#DBCA8B',
                  color: '#222222',
                  padding: `${spacing['2xs']}px ${spacing.sm}px`,
                  borderRadius: border.radius.full,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Featured
              </span>
              <span
                style={{
                  backgroundColor: '#26870D',
                  color: '#FFFFFF',
                  padding: `${spacing['2xs']}px ${spacing.sm}px`,
                  borderRadius: border.radius.full,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                New
              </span>
              <span
                style={{
                  backgroundColor: '#D2232A',
                  color: '#FFFFFF',
                  padding: `${spacing['2xs']}px ${spacing.sm}px`,
                  borderRadius: border.radius.full,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Breaking
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], marginBottom: spacing.md, fontWeight: 600 }}>
              Text Links
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.xl }}>
              <span style={{ color: '#1B5F8A', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
                Dark Blue Link
              </span>
              <span style={{ color: '#222222', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
                Dark Grey Link
              </span>
              <span style={{ color: '#A59143', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
                Dark Gold Link
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section
        style={{
          backgroundColor: '#222222',
          borderRadius: border.radius.lg,
          padding: spacing['2xl'],
          color: colors.neutral.lightest,
        }}
      >
        <h2 style={{ ...typography.heading.lg, margin: 0, color: '#DBCA8B' }}>
          Usage in Code
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[400], margin: `${spacing.md}px 0` }}>
          Reference these colors in your components:
        </p>
        <pre
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: border.radius.md,
            padding: spacing.lg,
            overflow: 'auto',
            fontSize: 14,
            fontFamily: 'monospace',
            lineHeight: 1.6,
          }}
        >
{`// Car and Driver Brand Colors
const carAndDriver = {
  // Primary Colors
  darkGrey: '#222222',
  darkBlue: '#1B5F8A',
  gold: '#DBCA8B',
  lightOrange: '#F7E4CA',
  lightGrey: '#F5F5F5',
  
  // Secondary Colors
  red: '#D2232A',
  green: '#26870D',
  darkGold: '#A59143',
  lightBlue: '#F1F7F7',
  white: '#FFFFFF',
};

// Example usage
<button style={{
  backgroundColor: carAndDriver.darkGrey,
  color: carAndDriver.white,
}}>
  Read Review
</button>

<span style={{
  backgroundColor: carAndDriver.gold,
  color: carAndDriver.darkGrey,
}}>
  Featured
</span>`}
        </pre>
      </section>
    </div>
  );
}
