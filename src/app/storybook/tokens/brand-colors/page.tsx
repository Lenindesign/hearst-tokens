'use client';

import { colors, spacing, typography, border } from '@/lib/designTokens';

// Brand color definitions
const brandColors = {
  carAndDriver: {
    name: 'Car and Driver',
    primary: '#D2232A',
    secondary: '#0061AF',
    accent: '#121212',
    background: '#ffffff',
    text: '#121212',
    description: 'Bold red and blue inspired by automotive heritage and racing.',
  },
  roadAndTrack: {
    name: 'Road & Track',
    primary: '#C41E3A',
    secondary: '#1C1C1C',
    accent: '#D4AF37',
    background: '#F5F5F5',
    text: '#1C1C1C',
    description: 'Classic red with gold accents for a premium automotive feel.',
  },
  hearstAutos: {
    name: 'Hearst Autos',
    primary: '#1c5f8b',
    secondary: '#4c759f',
    accent: '#dae2e5',
    background: '#f5f5f5',
    text: '#121212',
    description: 'Professional blue tones representing the Hearst Autos network.',
  },
  autoweek: {
    name: 'Autoweek',
    primary: '#E31837',
    secondary: '#003366',
    accent: '#FFD700',
    background: '#FFFFFF',
    text: '#333333',
    description: 'Energetic red and navy for automotive news and racing coverage.',
  },
};

// Color Swatch Component
interface ColorSwatchProps {
  name: string;
  value: string;
  size?: 'small' | 'large';
}

function ColorSwatch({ name, value, size = 'small' }: ColorSwatchProps) {
  const isLight = value.toLowerCase() === '#ffffff' || value.toLowerCase() === '#f5f5f5';
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: border.radius.md,
        overflow: 'hidden',
        border: `1px solid ${colors.neutral[300]}`,
        backgroundColor: colors.neutral.lightest,
      }}
    >
      <div
        style={{
          height: size === 'large' ? 120 : 80,
          backgroundColor: value,
          border: isLight ? `1px solid ${colors.neutral[300]}` : 'none',
          borderBottom: `1px solid ${colors.neutral[300]}`,
        }}
      />
      <div style={{ padding: spacing.sm }}>
        <p style={{ ...typography.body.sm, fontWeight: 600, color: colors.neutral.darkest, margin: 0 }}>
          {name}
        </p>
        <p style={{ ...typography.caption.sm, color: colors.neutral[600], margin: `${spacing['2xs']}px 0 0`, fontFamily: 'monospace' }}>
          {value}
        </p>
      </div>
    </div>
  );
}

// Brand Card Component
interface BrandCardProps {
  brand: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    description: string;
  };
}

function BrandCard({ brand }: BrandCardProps) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        overflow: 'hidden',
        marginBottom: spacing['2xl'],
      }}
    >
      {/* Brand Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.secondary} 100%)`,
          padding: spacing.xl,
          color: '#ffffff',
        }}
      >
        <h3 style={{ ...typography.heading.lg, margin: 0, color: '#ffffff' }}>
          {brand.name}
        </h3>
        <p style={{ ...typography.body.sm, margin: `${spacing.xs}px 0 0`, opacity: 0.9 }}>
          {brand.description}
        </p>
      </div>

      {/* Color Swatches */}
      <div style={{ padding: spacing.lg }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: spacing.md,
          }}
        >
          <ColorSwatch name="Primary" value={brand.primary} size="large" />
          <ColorSwatch name="Secondary" value={brand.secondary} size="large" />
          <ColorSwatch name="Accent" value={brand.accent} />
          <ColorSwatch name="Background" value={brand.background} />
          <ColorSwatch name="Text" value={brand.text} />
        </div>
      </div>

      {/* Usage Example */}
      <div
        style={{
          padding: spacing.lg,
          borderTop: `1px solid ${colors.neutral[300]}`,
          backgroundColor: colors.neutral[100],
        }}
      >
        <p style={{ ...typography.caption.md, color: colors.neutral[600], margin: 0, marginBottom: spacing.sm }}>
          Preview
        </p>
        <div
          style={{
            backgroundColor: brand.background,
            padding: spacing.lg,
            borderRadius: border.radius.md,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md }}>
            <div
              style={{
                width: 40,
                height: 40,
                backgroundColor: brand.primary,
                borderRadius: border.radius.sm,
              }}
            />
            <div>
              <p style={{ ...typography.heading.sm, color: brand.text, margin: 0 }}>
                {brand.name}
              </p>
              <p style={{ ...typography.caption.sm, color: brand.secondary, margin: 0 }}>
                Brand Identity
              </p>
            </div>
          </div>
          <button
            style={{
              backgroundColor: brand.primary,
              color: '#ffffff',
              padding: `${spacing.sm}px ${spacing.lg}px`,
              borderRadius: border.radius.md,
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              marginRight: spacing.sm,
            }}
          >
            Primary Action
          </button>
          <button
            style={{
              backgroundColor: 'transparent',
              color: brand.secondary,
              padding: `${spacing.sm}px ${spacing.lg}px`,
              borderRadius: border.radius.md,
              border: `2px solid ${brand.secondary}`,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BrandColorsPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Brand Colors
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Each Hearst brand has its own distinct color palette that reflects its identity and audience. Use these colors consistently across all brand touchpoints.
        </p>
      </div>

      {/* Brand Palettes */}
      <section>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Brand Palettes
        </h2>

        {Object.values(brandColors).map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </section>

      {/* Usage Guidelines */}
      <section style={{ marginTop: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.lg, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Usage Guidelines
        </h2>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing.lg,
          }}
        >
          <div
            style={{
              backgroundColor: colors.neutral.lightest,
              padding: spacing.lg,
              borderRadius: border.radius.lg,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
              Primary Colors
            </h3>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              Use primary colors for main CTAs, headers, and key brand elements. They should be the most prominent colors in the UI.
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.neutral.lightest,
              padding: spacing.lg,
              borderRadius: border.radius.lg,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
              Secondary Colors
            </h3>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              Secondary colors support the primary palette. Use them for secondary buttons, links, and supporting UI elements.
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.neutral.lightest,
              padding: spacing.lg,
              borderRadius: border.radius.lg,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
              Accent Colors
            </h3>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              Accent colors add visual interest and highlight important information. Use sparingly for maximum impact.
            </p>
          </div>

          <div
            style={{
              backgroundColor: colors.neutral.lightest,
              padding: spacing.lg,
              borderRadius: border.radius.lg,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
              Accessibility
            </h3>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              Ensure sufficient contrast ratios (4.5:1 for text, 3:1 for UI components) when combining colors.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section
        style={{
          marginTop: spacing['3xl'],
          backgroundColor: colors.neutral.darkest,
          borderRadius: border.radius.lg,
          padding: spacing['2xl'],
          color: colors.neutral.lightest,
        }}
      >
        <h2 style={{ ...typography.heading.lg, margin: 0 }}>
          Usage
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[400], margin: `${spacing.md}px 0` }}>
          Import brand colors in your components:
        </p>
        <pre
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: border.radius.md,
            padding: spacing.lg,
            overflow: 'auto',
            fontSize: 14,
            fontFamily: 'monospace',
          }}
        >
{`// Define brand-specific colors
const brandColors = {
  carAndDriver: {
    primary: '#D2232A',
    secondary: '#0061AF',
    accent: '#121212',
  },
};

// Use in components
<button style={{
  backgroundColor: brandColors.carAndDriver.primary,
  color: '#ffffff',
}}>
  Subscribe
</button>`}
        </pre>
      </section>
    </div>
  );
}
