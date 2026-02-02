'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { LatestNewsSidebar } from '@/components/LatestNewsSidebar';

export default function LeftSidebarPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          LatestNewsSidebar
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A sidebar column component for displaying the latest news stories with images and timestamps (Car and Driver style).
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
          <div style={{ maxWidth: 290 }}>
            <LatestNewsSidebar
              title="Latest News"
              stories={[
                { id: 1, title: "Tesla Will Kill the Model S and Model X This Year", timestamp: '19 mins ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-tesla-model-s-plaid-134-68f6610846819.jpg' },
                { id: 2, title: "Genesis Has Sold Some Copies of This Wild Concept", timestamp: '1 hr ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/02-x-skorpio-concept-exterior-6978725403776.jpg?crop=1xw:0.9997037914691943xh;center,top&resize=1800:*' },
                { id: 3, title: "2026 Ineos Grenadier Gets a Black Edition", timestamp: '1 hr ago', showPlayIcon: true, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/07-my26-grenadier-quartermaster-black-edition-studio-697a27265b491.jpeg?crop=1.00xw:0.754xh;0,0.166xh&resize=1800:*' },
                { id: 4, title: "Cadillac CT5-V Blackwing's New Package Costs $27K", timestamp: '2 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*' },
                { id: 5, title: "Hyundai Planning to Drop Santa Cruz Pickup", timestamp: '3 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-santa-cruz-exterior-113-66042095b2fac.jpg?crop=0.748xw:0.686xh;0.0901xw,0.255xh&resize=980:*', showPlayIcon: true },
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
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>stories</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>Array&lt;&#123;title, timestamp&#125;&gt;</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Array of story objects with title and timestamp.</td>
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
{`import { LatestNewsSidebar } from '@/components/LatestNewsSidebar';

<LatestNewsSidebar
  title="Latest News"
  stories={[
    { id: 1, title: 'Story Title', timestamp: '2 hours ago', imageSrc: '/path/to/image.jpg' },
    { id: 2, title: 'Another Story', timestamp: '4 hours ago', imageSrc: '/path/to/image.jpg', showPlayIcon: true },
  ]}
/>`}
        </pre>
      </section>
    </div>
  );
}
