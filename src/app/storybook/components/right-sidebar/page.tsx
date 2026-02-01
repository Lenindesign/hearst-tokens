'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { RightSidebarColumn } from '@/components/RightSidebarColumn';

export default function RightSidebarPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          RightSidebarColumn
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A sidebar column for displaying cards with images and descriptions.
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
          <div style={{ maxWidth: 300 }}>
            <RightSidebarColumn
              cards={[
                { id: 1, sectionLabel: 'ESSENTIAL READS', title: 'Best SUVs of 2024: Our Top Picks', dek: 'Our editors pick the top SUVs for every budget.', author: 'By Auto Editor' },
                { id: 2, sectionLabel: 'ESSENTIAL READS', title: 'Electric vs Gas: Cost Comparison', dek: 'Breaking down the true cost of ownership.', author: 'By Tech Writer' },
                { id: 3, sectionLabel: 'ESSENTIAL READS', title: 'How to Save on Car Insurance', dek: 'Expert tips to lower your premiums.', author: 'By Finance Expert' },
              ]}
            />
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
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>cards</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>Array&lt;&#123;id, description, author?&#125;&gt;</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Array of card objects with description and optional author.</td>
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
{`import { RightSidebarColumn } from '@/components/RightSidebarColumn';

<RightSidebarColumn
  cards={[
    { id: 1, description: 'Card description', author: 'Author' },
    { id: 2, description: 'Another card', author: 'Writer' },
  ]}
/>`}
        </pre>
      </section>
    </div>
  );
}
