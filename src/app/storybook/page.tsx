'use client';

import Link from 'next/link';
import { colors, spacing, font, typography, elevation, border } from '@/lib/designTokens';

// Quick Stats Card
interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  href: string;
}

function StatCard({ title, value, description, href }: StatCardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: colors.neutral.lightest,
          borderRadius: border.radius.lg,
          padding: spacing.xl,
          boxShadow: elevation.sm,
          border: `1px solid ${colors.neutral[300]}`,
          transition: 'all 0.2s ease',
          cursor: 'pointer',
        }}
      >
        <p style={{ ...typography.caption.md, color: colors.neutral[600], margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>
          {title}
        </p>
        <p style={{ ...typography.display.sm, color: colors.neutral.darkest, margin: `${spacing.xs}px 0` }}>
          {value}
        </p>
        <p style={{ ...typography.body.sm, color: colors.neutral[500], margin: 0 }}>
          {description}
        </p>
      </div>
    </Link>
  );
}

// Feature Card
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: colors.neutral.lightest,
          borderRadius: border.radius.lg,
          padding: spacing.xl,
          boxShadow: elevation.sm,
          border: `1px solid ${colors.neutral[300]}`,
          height: '100%',
          transition: 'all 0.2s ease',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: spacing.md }}>{icon}</div>
        <h3 style={{ ...typography.heading.sm, color: colors.neutral.darkest, margin: 0 }}>
          {title}
        </h3>
        <p style={{ ...typography.body.sm, color: colors.neutral[600], margin: `${spacing.sm}px 0 0` }}>
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function StorybookOverview() {
  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h1 style={{ ...typography.display.lg, color: colors.neutral.darkest, margin: 0 }}>
          Hearst Design System
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 600 }}>
          A comprehensive design system for building consistent, beautiful interfaces across Hearst digital properties.
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          At a Glance
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing.lg,
          }}
        >
          <StatCard
            title="Color Tokens"
            value="60+"
            description="Semantic color palette"
            href="/storybook/tokens/colors"
          />
          <StatCard
            title="Typography"
            value="15"
            description="Text style presets"
            href="/storybook/tokens/typography"
          />
          <StatCard
            title="Spacing"
            value="11"
            description="Consistent scale"
            href="/storybook/tokens/spacing"
          />
          <StatCard
            title="Components"
            value="11"
            description="Ready to use"
            href="/storybook/components/main-navigation"
          />
        </div>
      </div>

      {/* Features */}
      <div style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Explore the System
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing.lg,
          }}
        >
          <FeatureCard
            icon="🎨"
            title="Colors"
            description="Explore our semantic color palette including neutrals, alerts, and brand colors."
            href="/storybook/tokens/colors"
          />
          <FeatureCard
            icon="📝"
            title="Typography"
            description="Font families, sizes, weights, and pre-built text style combinations."
            href="/storybook/tokens/typography"
          />
          <FeatureCard
            icon="📐"
            title="Spacing & Layout"
            description="Consistent spacing scale and layout containers for responsive design."
            href="/storybook/tokens/spacing"
          />
          <FeatureCard
            icon="🧩"
            title="Components"
            description="Pre-built UI components with live previews and usage examples."
            href="/storybook/components/main-navigation"
          />
          <FeatureCard
            icon="📄"
            title="Page Examples"
            description="See how components come together in real page layouts."
            href="/storybook/pages/homepage"
          />
          <FeatureCard
            icon="⬛"
            title="Borders & Elevation"
            description="Border radius, widths, and shadow elevation tokens."
            href="/storybook/tokens/borders"
          />
        </div>
      </div>

      {/* Getting Started */}
      <div
        style={{
          backgroundColor: colors.neutral.darkest,
          borderRadius: border.radius.lg,
          padding: spacing['2xl'],
          color: colors.neutral.lightest,
        }}
      >
        <h2 style={{ ...typography.heading.lg, margin: 0 }}>
          Getting Started
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[400], margin: `${spacing.md}px 0` }}>
          Import tokens directly into your components:
        </p>
        <pre
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: border.radius.md,
            padding: spacing.lg,
            overflow: 'auto',
            fontSize: font.size.sm,
            fontFamily: font.family.mono,
          }}
        >
{`import { colors, spacing, typography } from '@/lib/designTokens';

// Use in your components
<div style={{
  color: colors.neutral.darkest,
  padding: spacing.lg,
  ...typography.body.md,
}}>
  Your content here
</div>`}
        </pre>
      </div>
    </div>
  );
}
