'use client';

import { colors, spacing, typography, border, layout, breakpoints } from '@/lib/designTokens';

// Spacing Visual Component
interface SpacingVisualProps {
  name: string;
  value: number;
  tokenPath: string;
}

function SpacingVisual({ name, value, tokenPath }: SpacingVisualProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.lg,
        padding: spacing.md,
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.md,
        border: `1px solid ${colors.neutral[300]}`,
      }}
    >
      <code style={{ width: 80, fontFamily: 'monospace', fontSize: 13, color: colors.neutral[600] }}>
        {name}
      </code>
      <span style={{ width: 50, fontSize: 13, color: colors.neutral[500] }}>
        {value}px
      </span>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: value,
            height: 24,
            backgroundColor: colors.alert.info[500],
            borderRadius: 2,
            minWidth: value === 0 ? 2 : undefined,
          }}
        />
      </div>
      <code style={{ fontSize: 11, color: colors.neutral[500], fontFamily: 'monospace' }}>
        {tokenPath}
      </code>
    </div>
  );
}

// Layout Visual Component
interface LayoutVisualProps {
  name: string;
  value: number;
  tokenPath: string;
}

function LayoutVisual({ name, value, tokenPath }: LayoutVisualProps) {
  const displayWidth = Math.min(value, 400);
  const scale = displayWidth / value;
  
  return (
    <div
      style={{
        padding: spacing.md,
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.md,
        border: `1px solid ${colors.neutral[300]}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing.sm }}>
        <div>
          <code style={{ fontFamily: 'monospace', fontSize: 13, color: colors.neutral[600] }}>
            {name}
          </code>
          <span style={{ marginLeft: spacing.sm, fontSize: 13, color: colors.neutral[500] }}>
            {value}px
          </span>
        </div>
        <code style={{ fontSize: 11, color: colors.neutral[500], fontFamily: 'monospace' }}>
          {tokenPath}
        </code>
      </div>
      <div
        style={{
          width: displayWidth,
          height: 40,
          backgroundColor: colors.alert.success[300],
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {scale < 1 && (
          <span style={{ fontSize: 11, color: colors.alert.success[800] }}>
            Scaled to {Math.round(scale * 100)}%
          </span>
        )}
      </div>
    </div>
  );
}

// Breakpoint Visual
interface BreakpointVisualProps {
  name: string;
  value: number;
  tokenPath: string;
}

function BreakpointVisual({ name, value, tokenPath }: BreakpointVisualProps) {
  const displayWidth = Math.min(value / 4, 400);
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.lg,
        padding: spacing.md,
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.md,
        border: `1px solid ${colors.neutral[300]}`,
      }}
    >
      <code style={{ width: 60, fontFamily: 'monospace', fontSize: 13, color: colors.neutral[600] }}>
        {name}
      </code>
      <span style={{ width: 70, fontSize: 13, color: colors.neutral[500] }}>
        {value}px
      </span>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: displayWidth,
            height: 24,
            backgroundColor: colors.alert.warning[400],
            borderRadius: 2,
          }}
        />
      </div>
      <code style={{ fontSize: 11, color: colors.neutral[500], fontFamily: 'monospace' }}>
        {tokenPath}
      </code>
    </div>
  );
}

export default function SpacingPage() {
  const spacingTokens = Object.entries(spacing).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `spacing.${key}`,
  }));

  const layoutTokens = Object.entries(layout).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `layout.${key}`,
  }));

  const breakpointTokens = Object.entries(breakpoints).map(([key, value]) => ({
    name: key,
    value,
    tokenPath: `breakpoints.${key}`,
  }));

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Spacing & Layout
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Consistent spacing creates visual rhythm and hierarchy. Our spacing scale is based on a 4px base unit for pixel-perfect alignment.
        </p>
      </div>

      {/* Spacing Scale */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Spacing Scale
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.lg }}>
          Use these tokens for padding, margins, and gaps between elements.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          {spacingTokens.map((token, index) => (
            <SpacingVisual key={index} {...token} />
          ))}
        </div>
      </section>

      {/* Layout Widths */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Layout Widths
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.lg }}>
          Container and component width tokens for consistent layouts.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: spacing.md }}>
          {layoutTokens.map((token, index) => (
            <LayoutVisual key={index} {...token} />
          ))}
        </div>
      </section>

      {/* Breakpoints */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Breakpoints
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.lg }}>
          Responsive design breakpoints for different screen sizes.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          {breakpointTokens.map((token, index) => (
            <BreakpointVisual key={index} {...token} />
          ))}
        </div>
      </section>

      {/* Usage Example */}
      <section
        style={{
          backgroundColor: colors.neutral.darkest,
          borderRadius: border.radius.lg,
          padding: spacing['2xl'],
          color: colors.neutral.lightest,
        }}
      >
        <h2 style={{ ...typography.heading.lg, margin: 0 }}>
          Usage Example
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[400], margin: `${spacing.md}px 0` }}>
          Import and use spacing tokens in your components:
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
{`import { spacing, layout } from '@/lib/designTokens';

// Padding and margins
<div style={{
  padding: spacing.lg,        // 20px
  marginBottom: spacing['2xl'], // 32px
  gap: spacing.md,            // 16px
}}>

// Container widths
<div style={{
  maxWidth: layout['2xl'],    // 1024px
  margin: '0 auto',
}}>

// Responsive breakpoints
@media (min-width: \${breakpoints.md}px) {
  // Tablet and up styles
}`}
        </pre>
      </section>
    </div>
  );
}
