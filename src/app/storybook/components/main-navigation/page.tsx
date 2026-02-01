'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';
import { MainNavigation } from '@/components/MainNavigation';

export default function MainNavigationPage() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1400, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: 0 }}>
          MainNavigation
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          The primary navigation component for site headers. Includes logo, menu links, search, and sign-in functionality.
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
            overflow: 'hidden',
            border: `1px solid ${colors.neutral[300]}`,
          }}
        >
          <MainNavigation
            brandName="CAR AND DRIVER"
            menuLinks={[
              { label: 'News', href: '#' },
              { label: 'Reviews', href: '#' },
              { label: "Buyer's Guide", href: '#' },
              { label: 'Features', href: '#' },
              { label: 'Video', href: '#' },
              { label: 'Podcasts', href: '#' },
              { label: 'More', href: '#' },
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
                <th style={{ padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}`, ...typography.caption.md, fontWeight: 600 }}>Default</th>
                <th style={{ padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}`, ...typography.caption.md, fontWeight: 600 }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>brandName</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>string</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[500] }}>&apos;HEARST&apos;</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Brand name displayed in logo. &quot;CAR AND DRIVER&quot; renders SVG logo.</td>
              </tr>
              <tr>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                  <code style={{ fontFamily: font.family.mono, fontSize: 13, color: colors.alert.info[700] }}>menuLinks</code>
                </td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[600] }}>Array&lt;&#123;label, href&#125;&gt;</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: font.family.mono, fontSize: 13, color: colors.neutral[500] }}>[]</td>
                <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, ...typography.body.sm, color: colors.neutral[600] }}>Navigation menu links array.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Variants */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Variants
        </h2>
        
        {/* Default Brand */}
        <div style={{ marginBottom: spacing.xl }}>
          <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, marginBottom: spacing.md }}>
            Default (Hearst)
          </h3>
          <div
            style={{
              backgroundColor: colors.neutral[200],
              borderRadius: border.radius.lg,
              overflow: 'hidden',
              border: `1px solid ${colors.neutral[300]}`,
            }}
          >
            <MainNavigation
              brandName="HEARST"
              menuLinks={[
                { label: 'News', href: '#' },
                { label: 'Reviews', href: '#' },
                { label: 'Features', href: '#' },
              ]}
            />
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
{`import { MainNavigation } from '@/components/MainNavigation';

<MainNavigation
  brandName="CAR AND DRIVER"
  menuLinks={[
    { label: 'News', href: '/news' },
    { label: 'Reviews', href: '/reviews' },
    { label: "Buyer's Guide", href: '/guide' },
    { label: 'Features', href: '/features' },
    { label: 'Video', href: '/video' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'More', href: '/more' },
  ]}
/>`}
        </pre>
      </section>
    </div>
  );
}
