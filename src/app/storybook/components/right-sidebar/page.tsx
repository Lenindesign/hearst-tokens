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
                { id: 1, sectionLabel: 'ESSENTIAL READS', title: "Mercedes Design Boss Gorden Wagener Picks His Faves", dek: "Retiring after 30 years Wagener chooses his favorite Benz creations.", author: 'By Brett Berk', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/25c0255-057-source-6978d8ab61150.jpg?resize=1800:*' },
                { id: 2, sectionLabel: 'ESSENTIAL READS', title: "An F1 Fan's First Daytona 24 Hours", dek: "A lifelong F1 fan attends his first 24-hour endurance race.", author: 'By Samantha MacAvoy', showPlayIcon: true, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-2258128426-6978ed1a82c20.jpg?crop=0.663xw:0.559xh;0.306xw,0.441xh&resize=1800:*' },
                { id: 3, sectionLabel: 'ESSENTIAL READS', title: "Every New Car You Can Still Buy with a Stick Shift", dek: "The cars on this list keep the #SaveTheManuals mission alive.", author: 'By Greg S. Fink and Joey Capparella', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/honda-civic-type-r-101-654e4f5880cc4.jpg?crop=0.573xw:0.485xh;0.250xw,0.304xh' },
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
