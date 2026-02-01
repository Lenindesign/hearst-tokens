'use client';

import { colors, spacing, typography, border } from '@/lib/designTokens';

// All Hearst brand palettes with their actual colors from the token API
// Source: https://figma-connector.kubeprod.hearstapps.com/token-studio/tokens
const hearstBrands = {
  autoweek: {
    name: 'Autoweek',
    colors: ['#ffc84e', '#eb3135', '#2c6f74', '#e96c28', '#dae5d3', '#f8f4f5', '#454148', '#cb1418', '#ffb81b'],
  },
  bestProducts: {
    name: 'Best Products',
    colors: ['#1c1c9b', '#e22d21', '#1a847f', '#24adcc', '#f8e4dd', '#eaf6f6'],
  },
  bicycling: {
    name: 'Bicycling',
    colors: ['#067ea7', '#f8d811', '#EF4129'],
  },
  biography: {
    name: 'Biography',
    colors: ['#a00000'],
  },
  carAndDriver: {
    name: 'Car and Driver',
    colors: ['#8dafc5', '#b1b1b1', '#444444', '#e2e2e2', '#eaeaea', '#6abd45', '#6f6f6f', '#00a4db', '#1c5f8b', '#f1f7f7', '#dbca8b', '#607d8b', '#dae2e5'],
  },
  cosmopolitan: {
    name: 'Cosmopolitan',
    colors: ['#d70000', '#F6D3E5'],
  },
  countryLiving: {
    name: 'Country Living',
    colors: ['#0a5c80', '#cde5f0', '#fff9ed', '#3e93c3', '#78756b', '#9ecde1', '#e4eff1', '#009da8'],
  },
  delish: {
    name: 'Delish',
    colors: ['#004685', '#ffc035', '#ff553e', '#adcf21', '#66cecf', '#c6e9f0', '#ebf7fc', '#278090', '#343434'],
  },
  elle: {
    name: 'ELLE',
    colors: ['#000000', '#f5f5f4', '#f0ede6'],
  },
  elleDecor: {
    name: 'ELLE Decor',
    colors: ['#3777bc'],
  },
  esquire: {
    name: 'Esquire',
    colors: ['#ff3a30', '#f5f6f8', '#15263d', '#ff5a52', '#e00b00', '#ececec', '#515150', '#161616'],
  },
  goodHousekeeping: {
    name: 'Good Housekeeping',
    colors: ['#53c2be', '#198294', '#125c68', '#f8f3f4', '#9e3326', '#d24432'],
  },
  harpersBazaar: {
    name: "Harper's BAZAAR",
    colors: ['#000000', '#aa0703', '#ff0000', '#77747b', '#ff5e5e'],
  },
  houseBeautiful: {
    name: 'House Beautiful',
    colors: ['#242d39', '#fbfafa', '#f5f2ee'],
  },
  mensHealth: {
    name: "Men's Health",
    colors: ['#d2232e', '#fff200', '#202020', '#696969', '#878787'],
  },
  oprahDaily: {
    name: 'Oprah Daily',
    colors: ['#e61957', '#166534', '#bef264', '#fde047', '#4a044e', '#bae6fd', '#f6f3f6', '#881337', '#f0e2ce', '#fdba74'],
  },
  popularMechanics: {
    name: 'Popular Mechanics',
    colors: ['#1c6a65', '#f04e3e', '#fef837', '#595959', '#414141', '#ececec', '#f8f8f8'],
  },
  prevention: {
    name: 'Prevention',
    colors: ['#44c1c5', '#eaf4f5', '#fcd029', '#33a0a3', '#088092'],
  },
  redbook: {
    name: 'Redbook',
    colors: ['#d30c4f', '#69dcbf', '#b2003c', '#f8bbd0'],
  },
  roadAndTrack: {
    name: 'Road & Track',
    colors: ['#434343', '#1b1a1a', '#b4b3b3', '#668892', '#bb322f', '#efede9', '#e6b72a', '#53ddd9', '#809da6'],
  },
  runnersWorld: {
    name: "Runner's World",
    colors: ['#59e7ed', '#ff7d46', '#17d0d8', '#dffafc', '#cc3d00', '#b2cccb', '#d4e3e2'],
  },
  seventeen: {
    name: 'Seventeen',
    colors: ['#ff92de', '#eeffae', '#f1dce1'],
  },
  thePioneerWoman: {
    name: 'The Pioneer Woman',
    colors: ['#8B376C', '#F4EDD8', '#242424'],
  },
  townAndCountry: {
    name: 'Town & Country',
    colors: ['#9a0500', '#030929', '#f1f2f4', '#092958'],
  },
  veranda: {
    name: 'Veranda',
    colors: ['#f3ead9'],
  },
  womansDay: {
    name: "Woman's Day",
    colors: ['#683d85', '#d80900', '#ee4741'],
  },
  womensHealth: {
    name: "Women's Health",
    colors: ['#1d4ed8', '#ebff7c', '#14b8a6', '#e9d5ff', '#f9a8d4', '#ffedd5', '#ef4444', '#ec4899', '#0d9488'],
  },
};

// Brand colors from the design token system
// These are the actual brand colors defined in palette.brand
const tokenBrandColors = [
  { key: 'brand.1', value: colors.brand[1], name: 'Primary Blue', description: 'Main brand color for primary actions and key UI elements' },
  { key: 'brand.2', value: colors.brand[2], name: 'Yellow-Green Accent', description: 'Bright accent color for highlights and badges' },
  { key: 'brand.3', value: colors.brand[3], name: 'Teal', description: 'Secondary accent for success states and callouts' },
  { key: 'brand.4', value: colors.brand[4], name: 'Light Purple', description: 'Soft accent for backgrounds and subtle highlights' },
  { key: 'brand.5', value: colors.brand[5], name: 'Pink', description: 'Accent color for special promotions and highlights' },
  { key: 'brand.6', value: colors.brand[6], name: 'Light Orange', description: 'Warm accent for notifications and alerts' },
  { key: 'brand.7', value: colors.brand[7], name: 'Red', description: 'Error states and critical alerts' },
  { key: 'brand.8', value: colors.brand[8], name: 'Magenta', description: 'Bold accent for special features' },
  { key: 'brand.9', value: colors.brand[9], name: 'Dark Teal', description: 'Alternative accent for secondary elements' },
];

// Primary color scale from tokens
const primaryColorScale = [
  { key: 'primary.100', value: colors.primary[100], name: '100' },
  { key: 'primary.200', value: colors.primary[200], name: '200' },
  { key: 'primary.300', value: colors.primary[300], name: '300' },
  { key: 'primary.400', value: colors.primary[400], name: '400' },
  { key: 'primary.500', value: colors.primary[500], name: '500' },
  { key: 'primary.600', value: colors.primary[600], name: '600 (Brand)' },
  { key: 'primary.700', value: colors.primary[700], name: '700' },
  { key: 'primary.800', value: colors.primary[800], name: '800' },
  { key: 'primary.900', value: colors.primary[900], name: '900' },
  { key: 'primary.1000', value: colors.primary[1000], name: '1000' },
];

// Danger color scale from tokens
const dangerColorScale = [
  { key: 'danger.100', value: colors.danger[100], name: '100' },
  { key: 'danger.200', value: colors.danger[200], name: '200' },
  { key: 'danger.300', value: colors.danger[300], name: '300' },
  { key: 'danger.400', value: colors.danger[400], name: '400' },
  { key: 'danger.500', value: colors.danger[500], name: '500' },
  { key: 'danger.600', value: colors.danger[600], name: '600' },
  { key: 'danger.700', value: colors.danger[700], name: '700' },
  { key: 'danger.800', value: colors.danger[800], name: '800' },
  { key: 'danger.900', value: colors.danger[900], name: '900' },
  { key: 'danger.1000', value: colors.danger[1000], name: '1000' },
];

// Hearst Brand Card Component (like in the reference image)
interface HearstBrandCardProps {
  name: string;
  brandColors: string[];
}

function HearstBrandCard({ name, brandColors }: HearstBrandCardProps) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Brand Name */}
      <div style={{ padding: `${spacing.md}px ${spacing.lg}px`, borderBottom: `1px solid ${colors.neutral[200]}` }}>
        <p style={{ ...typography.body.md, fontWeight: 600, color: colors.neutral.darkest, margin: 0, textAlign: 'center' }}>
          {name}
        </p>
      </div>
      
      {/* Color Swatches Row */}
      <div style={{ display: 'flex', height: 48, backgroundColor: colors.neutral[100] }}>
        {brandColors.map((color, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              backgroundColor: color,
              minWidth: 40,
            }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}

// Color Swatch Component for brand colors
interface BrandSwatchProps {
  tokenKey: string;
  value: string;
  name: string;
  description?: string;
}

function BrandSwatch({ tokenKey, value, name, description }: BrandSwatchProps) {
  const isLight = value.toLowerCase() === '#ffffff' || value.toLowerCase() === '#f5f5f5' || 
                  value.toLowerCase() === '#ebff7c' || value.toLowerCase() === '#e9d5ff' ||
                  value.toLowerCase() === '#f9a8d4' || value.toLowerCase() === '#ffedd5';
  
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
      <div
        style={{
          height: 100,
          backgroundColor: value,
          border: isLight ? `1px solid ${colors.neutral[300]}` : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ 
          color: isLight ? colors.neutral.darkest : colors.neutral.lightest,
          fontFamily: 'monospace',
          fontSize: 14,
          fontWeight: 600,
        }}>
          {value}
        </span>
      </div>
      <div style={{ padding: spacing.md }}>
        <p style={{ ...typography.body.sm, fontWeight: 600, color: colors.neutral.darkest, margin: 0 }}>
          {name}
        </p>
        <p style={{ ...typography.caption.sm, color: colors.neutral[600], margin: `${spacing['2xs']}px 0 0`, fontFamily: 'monospace' }}>
          {tokenKey}
        </p>
        {description && (
          <p style={{ ...typography.caption.sm, color: colors.neutral[500], margin: `${spacing.xs}px 0 0` }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Color Scale Swatch (for primary/danger scales)
interface ScaleSwatchProps {
  tokenKey: string;
  value: string;
  name: string;
}

function ScaleSwatch({ tokenKey, value, name }: ScaleSwatchProps) {
  const lightValues = ['100', '200', '300'];
  const isLight = lightValues.some(v => name.includes(v));
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.md,
        padding: spacing.sm,
        borderRadius: border.radius.md,
        backgroundColor: value,
        border: isLight ? `1px solid ${colors.neutral[300]}` : 'none',
      }}
    >
      <span style={{ 
        color: isLight ? colors.neutral.darkest : colors.neutral.lightest,
        fontWeight: 600,
        fontSize: 14,
        minWidth: 80,
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

export default function BrandColorsPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Brand Colors
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 700 }}>
          These are the brand colors for all Hearst publications and the design system token library.
        </p>
      </div>

      {/* All Hearst Brands Section */}
      <section style={{ marginBottom: spacing['4xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Hearst Brand Palettes
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          Each Hearst publication has its own distinct color palette. These colors define the visual identity of each brand.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: spacing.lg,
          }}
        >
          {Object.values(hearstBrands).map((brand) => (
            <HearstBrandCard
              key={brand.name}
              name={brand.name}
              brandColors={brand.colors}
            />
          ))}
        </div>
      </section>

      {/* Design System Token Colors */}
      <section>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Design System Tokens (palette.brand)
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          The core brand colors defined in the design token system. These are used for UI components across all brands.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: spacing.lg,
            marginBottom: spacing['3xl'],
          }}
        >
          {tokenBrandColors.map((color) => (
            <BrandSwatch
              key={color.key}
              tokenKey={color.key}
              value={color.value}
              name={color.name}
              description={color.description}
            />
          ))}
        </div>
      </section>

      {/* Primary Color Scale */}
      <section style={{ marginTop: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Primary Color Scale
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          A full scale of the primary brand color (blue) from lightest to darkest. Primary.600 matches brand.1.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing['2xs'],
            borderRadius: border.radius.lg,
            overflow: 'hidden',
          }}
        >
          {primaryColorScale.map((color) => (
            <ScaleSwatch
              key={color.key}
              tokenKey={color.key}
              value={color.value}
              name={color.name}
            />
          ))}
        </div>
      </section>

      {/* Danger Color Scale */}
      <section style={{ marginTop: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Danger Color Scale
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          Used for error states, destructive actions, and critical alerts.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing['2xs'],
            borderRadius: border.radius.lg,
            overflow: 'hidden',
          }}
        >
          {dangerColorScale.map((color) => (
            <ScaleSwatch
              key={color.key}
              tokenKey={color.key}
              value={color.value}
              name={color.name}
            />
          ))}
        </div>
      </section>

      {/* Usage Example */}
      <section style={{ marginTop: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.lg, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Interactive Preview
        </h2>
        
        <div
          style={{
            backgroundColor: colors.neutral[100],
            padding: spacing['2xl'],
            borderRadius: border.radius.lg,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.md, marginBottom: spacing.xl }}>
            <button
              style={{
                backgroundColor: colors.brand[1],
                color: colors.neutral.lightest,
                padding: `${spacing.sm}px ${spacing.xl}px`,
                borderRadius: border.radius.md,
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Primary Button (brand.1)
            </button>
            <button
              style={{
                backgroundColor: colors.brand[3],
                color: colors.neutral.lightest,
                padding: `${spacing.sm}px ${spacing.xl}px`,
                borderRadius: border.radius.md,
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Teal Button (brand.3)
            </button>
            <button
              style={{
                backgroundColor: colors.brand[7],
                color: colors.neutral.lightest,
                padding: `${spacing.sm}px ${spacing.xl}px`,
                borderRadius: border.radius.md,
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Danger Button (brand.7)
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
            <span
              style={{
                backgroundColor: colors.brand[2],
                color: colors.neutral.darkest,
                padding: `${spacing['2xs']}px ${spacing.sm}px`,
                borderRadius: border.radius.full,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Badge (brand.2)
            </span>
            <span
              style={{
                backgroundColor: colors.brand[4],
                color: colors.neutral.darkest,
                padding: `${spacing['2xs']}px ${spacing.sm}px`,
                borderRadius: border.radius.full,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Badge (brand.4)
            </span>
            <span
              style={{
                backgroundColor: colors.brand[5],
                color: colors.neutral.darkest,
                padding: `${spacing['2xs']}px ${spacing.sm}px`,
                borderRadius: border.radius.full,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Badge (brand.5)
            </span>
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
          Import brand colors from the design tokens:
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
{`import { colors } from '@/lib/designTokens';

// Access brand colors
const primaryBlue = colors.brand[1];    // #1d4ed8
const accentYellow = colors.brand[2];   // #ebff7c
const teal = colors.brand[3];           // #14b8a6

// Access primary scale
const primaryLight = colors.primary[200];  // #d7e9fe
const primaryMain = colors.primary[600];   // #1d4ed8
const primaryDark = colors.primary[800];   // #052b70

// Use in components
<button style={{
  backgroundColor: colors.brand[1],
  color: colors.neutral.lightest,
}}>
  Subscribe
</button>`}
        </pre>
      </section>
    </div>
  );
}
