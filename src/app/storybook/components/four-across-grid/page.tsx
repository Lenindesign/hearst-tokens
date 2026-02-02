'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { FourAcrossGrid } from '@/components/FourAcrossGrid';

export default function FourAcrossGridPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1400, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          FourAcrossGrid
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A four-column grid layout for displaying multiple cards in a row.
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
            overflow: 'auto',
          }}
        >
          <FourAcrossGrid
            title="Reviews"
            cards={[
              { id: 1, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.760xw:0.642xh;0.0641xw,0.243xh&resize=1200:*', title: '2024 BMW M3 Competition', author: 'By Auto Editor' },
              { id: 2, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1200:*', title: '2024 Mercedes-AMG GT', author: 'By Car Expert' },
              { id: 3, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1200:*', title: '2024 Porsche 911 Turbo S', author: 'By Racing Desk' },
              { id: 4, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=1200:*', title: '2024 Audi RS7 Sportback', author: 'By Test Driver' },
            ]}
          />
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
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>sectionTitle</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>string</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Section heading text.</td>
              </tr>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>cards</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>Array&lt;&#123;id, title, imageSrc?&#125;&gt;</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Array of card data (4 cards recommended).</td>
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
{`import { FourAcrossGrid } from '@/components/FourAcrossGrid';

<FourAcrossGrid
  sectionTitle="More Stories"
  cards={[
    { id: 1, title: 'Card Title 1' },
    { id: 2, title: 'Card Title 2' },
    { id: 3, title: 'Card Title 3' },
    { id: 4, title: 'Card Title 4' },
  ]}
/>`}
        </pre>
      </section>
    </div>
  );
}
