'use client';

import { colors, spacing, typography, border } from '@/lib/designTokens';
import { CarAndDriverHomepage } from '@/components/CarAndDriverHomepage';

export default function HomepageExamplePage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1600, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          Car & Driver Homepage
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A complete page example showing how components work together to create a full homepage layout.
        </p>
      </div>

      {/* Components Used */}
      <section style={{ marginBottom: spacing['2xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.md }}>
          Components Used
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
          {[
            'MainNavigation',
            'BigCard',
            'LeftSidebarColumn',
            'RightSidebarColumn',
            'FeedBlockSection',
            'FourAcrossGrid',
            'SeoBlockGrid',
            'Footer',
          ].map((component) => (
            <span
              key={component}
              style={{
                padding: `${spacing['2xs']}px ${spacing.md}px`,
                backgroundColor: colors.alert.info[100],
                color: colors.alert.info[700],
                borderRadius: border.radius.full,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {component}
            </span>
          ))}
        </div>
      </section>

      {/* Live Preview */}
      <section>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Live Preview
        </h2>
        <div
          style={{
            backgroundColor: colors.neutral[300],
            borderRadius: border.radius.lg,
            overflow: 'hidden',
            border: `1px solid ${colors.neutral[400]}`,
          }}
        >
          <div
            style={{
              transform: 'scale(0.75)',
              transformOrigin: 'top left',
              width: '133.33%',
              height: 'auto',
            }}
          >
            <CarAndDriverHomepage />
          </div>
        </div>
        <p style={{ ...typography.caption.md, color: colors.neutral[500], marginTop: spacing.md, textAlign: 'center' }}>
          Preview shown at 75% scale. View full page at <a href="/homepage" style={{ color: colors.alert.info[600] }}>/homepage</a>
        </p>
      </section>
    </div>
  );
}
