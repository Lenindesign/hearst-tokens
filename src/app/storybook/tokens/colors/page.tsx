'use client';

import { colors, primitives, spacing, typography, border, elevation } from '@/lib/designTokens';

// Color Swatch Component
interface ColorSwatchProps {
  name: string;
  value: string;
  tokenPath: string;
}

function ColorSwatch({ name, value, tokenPath }: ColorSwatchProps) {
  const isLight = value.toLowerCase() === '#ffffff' || value.toLowerCase() === '#f5f5f5' || value.toLowerCase() === '#ededed';
  
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
          height: 80,
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
        <p style={{ ...typography.caption.sm, color: colors.neutral[500], margin: `${spacing['2xs']}px 0 0`, fontFamily: 'monospace', fontSize: 11 }}>
          {tokenPath}
        </p>
      </div>
    </div>
  );
}

// Color Palette Section
interface ColorPaletteSectionProps {
  title: string;
  description: string;
  colors: Array<{ name: string; value: string; tokenPath: string }>;
}

function ColorPaletteSection({ title, description, colors: colorList }: ColorPaletteSectionProps) {
  return (
    <section style={{ marginBottom: spacing['3xl'] }}>
      <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, margin: 0 }}>
        {title}
      </h2>
      <p style={{ ...typography.body.md, color: colors.neutral[600], margin: `${spacing.xs}px 0 ${spacing.lg}px` }}>
        {description}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: spacing.md,
        }}
      >
        {colorList.map((color, index) => (
          <ColorSwatch key={index} {...color} />
        ))}
      </div>
    </section>
  );
}

export default function ColorsPage() {
  // Neutral Colors
  const neutralColors = [
    { name: 'Lightest', value: colors.neutral.lightest, tokenPath: 'colors.neutral.lightest' },
    { name: '100', value: colors.neutral[100], tokenPath: 'colors.neutral[100]' },
    { name: '200', value: colors.neutral[200], tokenPath: 'colors.neutral[200]' },
    { name: '300', value: colors.neutral[300], tokenPath: 'colors.neutral[300]' },
    { name: '400', value: colors.neutral[400], tokenPath: 'colors.neutral[400]' },
    { name: '500', value: colors.neutral[500], tokenPath: 'colors.neutral[500]' },
    { name: '600', value: colors.neutral[600], tokenPath: 'colors.neutral[600]' },
    { name: '700', value: colors.neutral[700], tokenPath: 'colors.neutral[700]' },
    { name: '800', value: colors.neutral[800], tokenPath: 'colors.neutral[800]' },
    { name: '900', value: colors.neutral[900], tokenPath: 'colors.neutral[900]' },
    { name: '1000', value: colors.neutral[1000], tokenPath: 'colors.neutral[1000]' },
    { name: 'Darkest', value: colors.neutral.darkest, tokenPath: 'colors.neutral.darkest' },
  ];

  // Success Colors
  const successColors = Object.entries(colors.alert.success).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `colors.alert.success[${key}]`,
  }));

  // Warning Colors
  const warningColors = Object.entries(colors.alert.warning).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `colors.alert.warning[${key}]`,
  }));

  // Error Colors
  const errorColors = Object.entries(colors.alert.error).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `colors.alert.error[${key}]`,
  }));

  // Info Colors
  const infoColors = Object.entries(colors.alert.info).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `colors.alert.info[${key}]`,
  }));

  // Primitive Gray
  const primitiveGray = Object.entries(primitives.palette.gray).map(([key, value]) => ({
    name: `Gray ${key}`,
    value,
    tokenPath: `primitives.palette.gray[${key}]`,
  }));

  // Primitive Blue
  const primitiveBlue = Object.entries(primitives.palette.blue).map(([key, value]) => ({
    name: `Blue ${key}`,
    value,
    tokenPath: `primitives.palette.blue[${key}]`,
  }));

  // Primitive Red
  const primitiveRed = Object.entries(primitives.palette.red).map(([key, value]) => ({
    name: `Red ${key}`,
    value,
    tokenPath: `primitives.palette.red[${key}]`,
  }));

  // Primitive Green
  const primitiveGreen = Object.entries(primitives.palette.green).map(([key, value]) => ({
    name: `Green ${key}`,
    value,
    tokenPath: `primitives.palette.green[${key}]`,
  }));

  // Primitive Orange
  const primitiveOrange = Object.entries(primitives.palette.orange).map(([key, value]) => ({
    name: `Orange ${key}`,
    value,
    tokenPath: `primitives.palette.orange[${key}]`,
  }));

  // Primitive Yellow
  const primitiveYellow = Object.entries(primitives.palette.yellow).map(([key, value]) => ({
    name: `Yellow ${key}`,
    value,
    tokenPath: `primitives.palette.yellow[${key}]`,
  }));

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Colors
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Our color system is built on semantic tokens that reference primitive values. Use semantic colors for UI elements to ensure consistency and easy theming.
        </p>
      </div>

      {/* Semantic Colors */}
      <div style={{ marginBottom: spacing['4xl'] }}>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Semantic Colors
        </h2>
        
        <ColorPaletteSection
          title="Neutral"
          description="Used for text, backgrounds, borders, and general UI elements."
          colors={neutralColors}
        />

        <ColorPaletteSection
          title="Success"
          description="Used for positive states, confirmations, and success messages."
          colors={successColors}
        />

        <ColorPaletteSection
          title="Warning"
          description="Used for warnings, cautions, and attention-needed states."
          colors={warningColors}
        />

        <ColorPaletteSection
          title="Error"
          description="Used for errors, destructive actions, and critical alerts."
          colors={errorColors}
        />

        <ColorPaletteSection
          title="Info"
          description="Used for informational states, links, and highlights."
          colors={infoColors}
        />
      </div>

      {/* Primitive Colors */}
      <div>
        <h2 style={{ ...typography.heading.xl, color: colors.neutral.darkest, marginBottom: spacing.xl, paddingBottom: spacing.md, borderBottom: `1px solid ${colors.neutral[300]}` }}>
          Primitive Colors
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.xl }}>
          These are the base color values that semantic tokens reference. Avoid using primitives directly in components—use semantic tokens instead.
        </p>

        <ColorPaletteSection
          title="Gray"
          description="Base gray scale from light to dark."
          colors={primitiveGray}
        />

        <ColorPaletteSection
          title="Blue"
          description="Primary blue palette."
          colors={primitiveBlue}
        />

        <ColorPaletteSection
          title="Red"
          description="Red palette for errors and alerts."
          colors={primitiveRed}
        />

        <ColorPaletteSection
          title="Green"
          description="Green palette for success states."
          colors={primitiveGreen}
        />

        <ColorPaletteSection
          title="Orange"
          description="Orange palette for warnings."
          colors={primitiveOrange}
        />

        <ColorPaletteSection
          title="Yellow"
          description="Yellow palette for highlights."
          colors={primitiveYellow}
        />
      </div>
    </div>
  );
}
