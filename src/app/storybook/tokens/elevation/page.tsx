'use client';

import { colors, spacing, typography, border, elevation } from '@/lib/designTokens';

export default function ElevationPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Elevation
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Shadow tokens create depth and visual hierarchy. Use elevation to indicate interactive states and layer relationships.
        </p>
      </div>

      {/* Elevation Scale */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Elevation Scale
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: spacing.xl }}>
          {Object.entries(elevation).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: spacing.xl,
                backgroundColor: colors.neutral[100],
                borderRadius: border.radius.lg,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: 120,
                  backgroundColor: colors.neutral.lightest,
                  borderRadius: border.radius.md,
                  boxShadow: value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: spacing.lg,
                }}
              >
                <span style={{ ...typography.heading.sm, color: colors.neutral[600] }}>
                  {key}
                </span>
              </div>
              <code style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 600, color: colors.neutral.darkest, display: 'block' }}>
                elevation.{key}
              </code>
              <code style={{ fontSize: 11, color: colors.neutral[500], fontFamily: 'monospace', display: 'block', marginTop: spacing.xs, wordBreak: 'break-all' }}>
                {value === 'none' ? 'none' : value}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Example */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Interactive States
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.lg }}>
          Use elevation to indicate hover and focus states on interactive elements.
        </p>
        <div style={{ display: 'flex', gap: spacing.xl, flexWrap: 'wrap' }}>
          {/* Resting State */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 160,
                height: 100,
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                boxShadow: elevation.sm,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing.sm,
              }}
            >
              <span style={{ color: colors.neutral[600] }}>Resting</span>
            </div>
            <code style={{ fontSize: 12, color: colors.neutral[500] }}>elevation.sm</code>
          </div>

          {/* Hover State */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 160,
                height: 100,
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                boxShadow: elevation.md,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing.sm,
                transform: 'translateY(-2px)',
              }}
            >
              <span style={{ color: colors.neutral[600] }}>Hover</span>
            </div>
            <code style={{ fontSize: 12, color: colors.neutral[500] }}>elevation.md</code>
          </div>

          {/* Active/Pressed State */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 160,
                height: 100,
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                boxShadow: elevation.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing.sm,
                transform: 'translateY(-4px)',
              }}
            >
              <span style={{ color: colors.neutral[600] }}>Lifted</span>
            </div>
            <code style={{ fontSize: 12, color: colors.neutral[500] }}>elevation.lg</code>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Common Use Cases
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: spacing.lg }}>
          {/* Card */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral[100],
              borderRadius: border.radius.lg,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, marginBottom: spacing.md }}>
              Cards
            </h3>
            <div
              style={{
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                boxShadow: elevation.sm,
                padding: spacing.lg,
              }}
            >
              <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: 0 }}>
                Cards use subtle elevation (sm) to separate from background.
              </p>
            </div>
          </div>

          {/* Dropdown */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral[100],
              borderRadius: border.radius.lg,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, marginBottom: spacing.md }}>
              Dropdowns
            </h3>
            <div
              style={{
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                boxShadow: elevation.lg,
                padding: spacing.sm,
              }}
            >
              <div style={{ padding: spacing.sm, borderRadius: border.radius.sm, backgroundColor: colors.neutral[100] }}>Option 1</div>
              <div style={{ padding: spacing.sm }}>Option 2</div>
              <div style={{ padding: spacing.sm }}>Option 3</div>
            </div>
          </div>

          {/* Modal */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral[100],
              borderRadius: border.radius.lg,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, marginBottom: spacing.md }}>
              Modals
            </h3>
            <div
              style={{
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.lg,
                boxShadow: elevation['2xl'],
                padding: spacing.lg,
              }}
            >
              <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: 0 }}>
                Modals use high elevation (2xl) to appear above content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section
        style={{
          backgroundColor: colors.neutral.darkest,
          borderRadius: border.radius.lg,
          padding: spacing['2xl'],
          color: colors.neutral.lightest,
        }}
      >
        <h2 style={{ ...typography.heading.lg, margin: 0 }}>
          Usage
        </h2>
        <pre
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: border.radius.md,
            padding: spacing.lg,
            overflow: 'auto',
            fontSize: 14,
            fontFamily: 'monospace',
            marginTop: spacing.lg,
          }}
        >
{`import { elevation } from '@/lib/designTokens';

// Card with subtle shadow
<div style={{ boxShadow: elevation.sm }}>
  Card content
</div>

// Dropdown menu
<div style={{ boxShadow: elevation.lg }}>
  Menu items
</div>

// Modal dialog
<div style={{ boxShadow: elevation['2xl'] }}>
  Modal content
</div>

// Interactive hover state
<div style={{
  boxShadow: isHovered ? elevation.md : elevation.sm,
  transition: 'box-shadow 0.2s ease',
}}>
  Interactive card
</div>`}
        </pre>
      </section>
    </div>
  );
}
