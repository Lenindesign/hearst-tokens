'use client';

import { colors, spacing, typography, border } from '@/lib/designTokens';

export default function BordersPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Borders
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Border tokens for consistent radius and width across components.
        </p>
      </div>

      {/* Border Radius */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Border Radius
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing.lg }}>
          {Object.entries(border.radius).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: spacing.lg,
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                border: `1px solid ${colors.neutral[300]}`,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: colors.alert.info[500],
                  borderRadius: value,
                  margin: '0 auto',
                  marginBottom: spacing.md,
                }}
              />
              <code style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 600, color: colors.neutral.darkest, display: 'block' }}>
                {key}
              </code>
              <span style={{ fontSize: 13, color: colors.neutral[600] }}>
                {value === 9999 ? 'full' : `${value}px`}
              </span>
              <code style={{ display: 'block', fontSize: 11, color: colors.neutral[500], fontFamily: 'monospace', marginTop: spacing.xs }}>
                border.radius.{key}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Border Width */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Border Width
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
          {Object.entries(border.width).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing.xl,
                padding: spacing.lg,
                backgroundColor: colors.neutral.lightest,
                borderRadius: border.radius.md,
                border: `1px solid ${colors.neutral[300]}`,
              }}
            >
              <code style={{ width: 100, fontFamily: 'monospace', fontSize: 14, fontWeight: 600, color: colors.neutral.darkest }}>
                {key}
              </code>
              <span style={{ width: 50, fontSize: 14, color: colors.neutral[600] }}>
                {value}px
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    width: '100%',
                    height: 40,
                    border: `${value}px solid ${colors.alert.info[500]}`,
                    borderRadius: border.radius.sm,
                    backgroundColor: colors.alert.info[100],
                  }}
                />
              </div>
              <code style={{ fontSize: 11, color: colors.neutral[500], fontFamily: 'monospace' }}>
                border.width.{key}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Examples
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: spacing.lg }}>
          {/* Card Example */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral.lightest,
              borderRadius: border.radius.lg,
              border: `${border.width.thin}px solid ${colors.neutral[300]}`,
            }}
          >
            <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
              Card
            </h3>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              radius.lg + width.thin
            </p>
          </div>

          {/* Button Example */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral.lightest,
              borderRadius: border.radius.md,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <button
              style={{
                padding: `${spacing.sm}px ${spacing.lg}px`,
                backgroundColor: colors.neutral.darkest,
                color: colors.neutral.lightest,
                borderRadius: border.radius.md,
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Button
            </button>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              radius.md
            </p>
          </div>

          {/* Pill Example */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral.lightest,
              borderRadius: border.radius.md,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: `${spacing['2xs']}px ${spacing.md}px`,
                backgroundColor: colors.alert.info[100],
                color: colors.alert.info[700],
                borderRadius: border.radius.full,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Tag Label
            </span>
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              radius.full
            </p>
          </div>

          {/* Input Example */}
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: colors.neutral.lightest,
              borderRadius: border.radius.md,
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <input
              type="text"
              placeholder="Input field"
              style={{
                width: '100%',
                padding: `${spacing.sm}px ${spacing.md}px`,
                borderRadius: border.radius.sm,
                border: `${border.width.thin}px solid ${colors.neutral[400]}`,
                fontSize: 14,
                boxSizing: 'border-box',
              }}
            />
            <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
              radius.sm + width.thin
            </p>
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
{`import { border, colors } from '@/lib/designTokens';

// Card with rounded corners
<div style={{
  borderRadius: border.radius.lg,
  border: \`\${border.width.thin}px solid \${colors.neutral[300]}\`,
}}>

// Pill/Tag with full radius
<span style={{
  borderRadius: border.radius.full,
}}>

// Input with subtle border
<input style={{
  borderRadius: border.radius.sm,
  border: \`\${border.width.thin}px solid \${colors.neutral[400]}\`,
}} />`}
        </pre>
      </section>
    </div>
  );
}
