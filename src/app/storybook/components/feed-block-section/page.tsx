'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { FeedBlockSection } from '@/components/FeedBlockSection';

export default function FeedBlockSectionPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1400, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          FeedBlockSection
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A content feed section with a large featured card and a list of smaller story cards.
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
          <FeedBlockSection
            title="Latest News"
            bigStory={{
              imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/afeela-prototype-2026-3-695d25d188596.jpg?crop=0.838xw:0.909xh;0.0577xw,0.00604xh',
              eyebrow: 'AUTOMOTIVE',
              title: 'The Future of Electric Vehicles Is Here. Everything You Need to Know About the Latest EV Technology.',
              author: 'By Auto Editor',
            }}
            sideCards={[
              { id: 1, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-m3-110-1674509061.jpg?crop=0.760xw:0.642xh;0.0641xw,0.243xh&resize=1200:*', title: '2024 Tesla Model S Review: Still the Best?', subtitle: 'Electric Sedan', timestamp: '2 hours ago', author: 'By John Smith', showDescription: true },
              { id: 2, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-117-6787c5548e855.jpg?crop=1.00xw:0.918xh;0,0.0816xh&resize=980:*', title: 'Ford Mustang Mach-E Gets Major Update', subtitle: 'Electric SUV', timestamp: '3 hours ago', author: 'By Sarah Johnson', showDescription: false },
              { id: 3, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2027-mercedes-benz-s-class-exterior-pr-111-697927a180999.jpg?crop=0.847xw:0.714xh;0.153xw,0.253xh&resize=1800:*', title: 'Best SUVs for Families in 2024', subtitle: 'Family Vehicles', timestamp: '5 hours ago', author: 'By Mike Davis', showDescription: false },
              { id: 4, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2024-porsche-911-gt3-rs-112-64ecdc018c917.jpg?crop=0.740xw:0.625xh;0.179xw,0.281xh&resize=1800:*', title: 'Porsche 911 GT3 RS Track Test', subtitle: 'Sports Car', timestamp: '6 hours ago', author: 'By Racing Desk', showDescription: false },
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
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>title</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>string</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Section heading text.</td>
              </tr>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>bigStory</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>object</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Props for the featured big story card (imageSrc, eyebrow, title, author).</td>
              </tr>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>sideCards</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>Array</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Array of side card data (id, imageSrc, title, subtitle, description, timestamp, author).</td>
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
{`import { FeedBlockSection } from '@/components/FeedBlockSection';

<FeedBlockSection
  sectionTitle="Latest News"
  mainCard={{
    eyebrow: 'AUTOMOTIVE',
    title: 'The Future of Electric Vehicles',
    author: 'Auto Editor',
  }}
  storyCards={[
    { id: 1, title: 'Story Title', subtitle: 'Subtitle', description: 'Description' },
    // ... more cards
  ]}
/>`}
        </pre>
      </section>
    </div>
  );
}
