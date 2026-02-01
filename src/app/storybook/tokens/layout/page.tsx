'use client';

import { colors, spacing, typography, border, layout, breakpoints } from '@/lib/designTokens';

export default function LayoutPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Layout
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          Layout tokens define container widths and breakpoints for responsive design.
        </p>
      </div>

      {/* Container Widths */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Container Widths
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
          {Object.entries(layout).map(([key, value]) => {
            const displayWidth = Math.min(value, 800);
            const scale = displayWidth / value;
            
            return (
              <div
                key={key}
                style={{
                  padding: spacing.lg,
                  backgroundColor: colors.neutral.lightest,
                  borderRadius: border.radius.md,
                  border: `1px solid ${colors.neutral[300]}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing.md }}>
                    <code style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 600, color: colors.neutral.darkest }}>
                      layout.{key}
                    </code>
                    <span style={{ fontSize: 14, color: colors.neutral[600] }}>
                      {value}px
                    </span>
                  </div>
                  {scale < 1 && (
                    <span style={{ fontSize: 12, color: colors.neutral[500] }}>
                      Shown at {Math.round(scale * 100)}% scale
                    </span>
                  )}
                </div>
                <div
                  style={{
                    width: displayWidth,
                    height: 32,
                    backgroundColor: colors.alert.info[200],
                    border: `2px solid ${colors.alert.info[500]}`,
                    borderRadius: border.radius.sm,
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Breakpoints */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Breakpoints
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[600], marginBottom: spacing.lg }}>
          Use these breakpoints for responsive media queries.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
          {Object.entries(breakpoints).map(([key, value]) => (
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
              <code style={{ width: 120, fontFamily: 'monospace', fontSize: 14, fontWeight: 600, color: colors.neutral.darkest }}>
                breakpoints.{key}
              </code>
              <span style={{ width: 80, fontSize: 14, color: colors.neutral[600] }}>
                {value}px
              </span>
              <div style={{ flex: 1, position: 'relative', height: 24 }}>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: `${(value / 1600) * 100}%`,
                    height: '100%',
                    backgroundColor: colors.alert.warning[300],
                    borderRadius: border.radius.sm,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Breakpoint Diagram */}
        <div
          style={{
            marginTop: spacing.xl,
            padding: spacing.xl,
            backgroundColor: colors.neutral.lightest,
            borderRadius: border.radius.lg,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
            Breakpoint Ranges
          </h3>
          <div style={{ display: 'flex', height: 60, gap: 2 }}>
            <div style={{ flex: '0 0 20%', backgroundColor: colors.alert.info[200], borderRadius: border.radius.sm, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.alert.info[800] }}>Mobile</span>
              <span style={{ fontSize: 10, color: colors.alert.info[700] }}>0 - 767px</span>
            </div>
            <div style={{ flex: '0 0 25%', backgroundColor: colors.alert.success[200], borderRadius: border.radius.sm, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.alert.success[800] }}>Tablet</span>
              <span style={{ fontSize: 10, color: colors.alert.success[700] }}>768 - 1023px</span>
            </div>
            <div style={{ flex: '0 0 25%', backgroundColor: colors.alert.warning[200], borderRadius: border.radius.sm, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.alert.warning[800] }}>Desktop</span>
              <span style={{ fontSize: 10, color: colors.alert.warning[700] }}>1024 - 1439px</span>
            </div>
            <div style={{ flex: '0 0 30%', backgroundColor: colors.alert.error[200], borderRadius: border.radius.sm, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: colors.alert.error[800] }}>Large Desktop</span>
              <span style={{ fontSize: 10, color: colors.alert.error[700] }}>1440px+</span>
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
{`import { layout, breakpoints } from '@/lib/designTokens';

// Container with max-width
<div style={{ maxWidth: layout['2xl'], margin: '0 auto' }}>
  {/* Content constrained to 1024px */}
</div>

// CSS Media Query
@media (min-width: \${breakpoints.md}px) {
  .container {
    padding: 32px;
  }
}

// JavaScript check
if (window.innerWidth >= breakpoints.lg) {
  // Desktop layout
}`}
        </pre>
      </section>
    </div>
  );
}
