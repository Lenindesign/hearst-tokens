'use client';

import { useState } from 'react';
import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { Toast } from '@/components/Toast';

export default function ToastPage() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Toast
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A notification toast component for displaying temporary messages.
        </p>
      </div>

      {/* Live Preview */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Live Preview
        </h2>
        <div
          style={{
            backgroundColor: colors.neutral[200],
            borderRadius: border.radius.lg,
            padding: spacing.xl,
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <button
            onClick={() => setShowToast(true)}
            style={{
              padding: `${spacing.sm}px ${spacing.lg}px`,
              backgroundColor: colors.neutral.darkest,
              color: colors.neutral.lightest,
              borderRadius: border.radius.md,
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: spacing.lg,
            }}
          >
            Show Toast
          </button>
          
          <div style={{ position: 'relative', minHeight: 100 }}>
            {showToast && (
              <div style={{ position: 'relative' }}>
                <Toast
                  message="This is a toast notification message!"
                  isVisible={showToast}
                  onHide={() => setShowToast(false)}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Props */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Props
        </h2>
        <div
          style={{
            backgroundColor: colors.neutral.lightest,
            borderRadius: border.radius.lg,
            border: `1px solid ${colors.neutral[300]}`,
            overflow: 'hidden',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: colors.neutral[100] }}>
                <th style={{ padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}`, ...typography.caption.md, fontWeight: 600 }}>Prop</th>
                <th style={{ padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}`, ...typography.caption.md, fontWeight: 600 }}>Type</th>
                <th style={{ padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}`, ...typography.caption.md, fontWeight: 600 }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>message</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>string</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>The notification message to display.</td>
              </tr>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>onClose</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>() =&gt; void</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Callback function when toast is dismissed.</td>
              </tr>
            </tbody>
          </table>
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
{`import { Toast } from '@/components/Toast';

const [showToast, setShowToast] = useState(false);

{showToast && (
  <Toast
    message="Action completed successfully!"
    onClose={() => setShowToast(false)}
  />
)}`}
        </pre>
      </section>
    </div>
  );
}
