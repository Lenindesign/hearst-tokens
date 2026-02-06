'use client';

import Link from 'next/link';

// Quick Stats Card
interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  href: string;
}

function StatCard({ title, value, description, href }: StatCardProps) {
  return (
    <Link href={href} className="no-underline">
      <div className="bg-neutral-100 rounded-lg p-6 shadow-sm border border-neutral-400 transition-all duration-200 cursor-pointer hover:shadow-md">
        <p className="text-xs text-neutral-700 m-0 uppercase tracking-wide">
          {title}
        </p>
        <p className="text-4xl font-bold text-neutral-1000 my-2">
          {value}
        </p>
        <p className="text-sm text-neutral-600 m-0">
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
    <Link href={href} className="no-underline">
      <div className="bg-neutral-100 rounded-lg p-6 shadow-sm border border-neutral-400 h-full transition-all duration-200 hover:shadow-md">
        <div className="text-[32px] mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-neutral-1000 m-0">
          {title}
        </h3>
        <p className="text-sm text-neutral-700 mt-3 m-0">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function StorybookOverview() {
  return (
    <div className="p-12 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold text-neutral-1000 m-0">
          Hearst Design System
        </h1>
        <p className="text-lg text-neutral-700 mt-4 max-w-[600px]">
          A comprehensive design system for building consistent, beautiful interfaces across Hearst digital properties.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          At a Glance
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
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
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-1000 mb-5">
          Explore the System
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
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
      <div className="bg-neutral-1000 rounded-lg p-8 text-neutral-100">
        <h2 className="text-2xl font-bold m-0">
          Getting Started
        </h2>
        <p className="text-base text-neutral-500 my-4">
          Use Tailwind classes with our design tokens:
        </p>
        <pre className="bg-white/10 rounded-md p-5 overflow-auto text-sm font-mono">
{`// Use Tailwind classes with CSS variables
<div className="text-neutral-1000 p-5 text-base">
  Your content here
</div>

// Theme-aware colors (change with data-theme)
<div className="bg-primary text-primary-foreground">
  Brand colored content
</div>`}
        </pre>
      </div>
    </div>
  );
}
