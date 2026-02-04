'use client';

import { colors, spacing, typography, border, font } from '@/lib/designTokens';

// Code Block Component
function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: border.radius.lg,
        overflow: 'hidden',
        marginBottom: spacing.lg,
      }}
    >
      {title && (
        <div
          style={{
            padding: `${spacing.sm}px ${spacing.md}px`,
            backgroundColor: '#2d2d2d',
            borderBottom: '1px solid #3d3d3d',
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: font.size.sm,
              color: '#9d9d9d',
            }}
          >
            {title}
          </span>
        </div>
      )}
      <pre
        style={{
          margin: 0,
          padding: spacing.lg,
          overflow: 'auto',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace',
          fontSize: 13,
          lineHeight: 1.6,
          color: '#d4d4d4',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Comparison Table Component
function ComparisonTable({ rows }: { rows: Array<{ before: string; after: string; description: string }> }) {
  return (
    <div
      style={{
        backgroundColor: colors.neutral.lightest,
        borderRadius: border.radius.lg,
        border: `1px solid ${colors.neutral[300]}`,
        overflow: 'hidden',
        marginBottom: spacing.xl,
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: colors.neutral[200] }}>
            <th style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest, padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}` }}>
              Before (Inline Style)
            </th>
            <th style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest, padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}` }}>
              After (Tailwind)
            </th>
            <th style={{ ...typography.body.md, fontWeight: font.weight.semibold, color: colors.neutral.darkest, padding: spacing.md, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}` }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? colors.neutral.lightest : colors.neutral[100] }}>
              <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: 'monospace', fontSize: 13, color: '#e06c75' }}>
                {row.before}
              </td>
              <td style={{ padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: 'monospace', fontSize: 13, color: '#98c379' }}>
                {row.after}
              </td>
              <td style={{ ...typography.body.sm, color: colors.neutral[700], padding: spacing.md, borderBottom: `1px solid ${colors.neutral[200]}` }}>
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Token Reference Table
function TokenTable({ title, rows }: { title: string; rows: Array<{ token: string; tailwind: string; value: string }> }) {
  return (
    <div style={{ marginBottom: spacing.xl }}>
      <h4 style={{ ...typography.heading.sm, color: colors.neutral.darkest, marginBottom: spacing.sm }}>{title}</h4>
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
            <tr style={{ backgroundColor: colors.neutral[200] }}>
              <th style={{ ...typography.caption.md, fontWeight: font.weight.semibold, color: colors.neutral[700], padding: spacing.sm, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}` }}>
                Token
              </th>
              <th style={{ ...typography.caption.md, fontWeight: font.weight.semibold, color: colors.neutral[700], padding: spacing.sm, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}` }}>
                Tailwind Class
              </th>
              <th style={{ ...typography.caption.md, fontWeight: font.weight.semibold, color: colors.neutral[700], padding: spacing.sm, textAlign: 'left', borderBottom: `1px solid ${colors.neutral[300]}` }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? colors.neutral.lightest : colors.neutral[100] }}>
                <td style={{ padding: spacing.sm, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: 'monospace', fontSize: 12, color: colors.neutral[700] }}>
                  {row.token}
                </td>
                <td style={{ padding: spacing.sm, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: 'monospace', fontSize: 12, color: '#98c379' }}>
                  {row.tailwind}
                </td>
                <td style={{ padding: spacing.sm, borderBottom: `1px solid ${colors.neutral[200]}`, fontFamily: 'monospace', fontSize: 12, color: colors.neutral[600] }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function TailwindMigrationPage() {
  const beforeExample = `// Before: Inline styles with tokens object
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacing.columnGap,
    width: tokens.sizes.columnWidth,
    backgroundColor: tokens.colors.background,
  }}
>
  <span
    style={{
      fontFamily: tokens.typography.title.fontFamily,
      fontSize: tokens.typography.title.fontSize,
      fontWeight: tokens.typography.title.fontWeight,
      color: tokens.colors.text,
    }}
  >
    {title}
  </span>
</div>`;

  const afterExample = `// After: Tailwind classes
<div className="flex flex-col gap-1 w-[220px] bg-neutral-100">
  <span className="font-sans text-3xl font-bold text-neutral-900">
    {title}
  </span>
</div>`;

  const cnUtilityCode = `// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage in components
import { cn } from '@/lib/utils';

function Button({ className, variant }) {
  return (
    <button 
      className={cn(
        "px-4 py-2 rounded-md font-medium",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        className
      )}
    />
  );
}`;

  const responsiveExample = `// Responsive design with Tailwind
<div className="
  flex flex-col gap-4
  md:flex-row md:gap-6
  lg:gap-8
">
  <aside className="w-full md:w-[180px] lg:w-[220px]">
    {/* Sidebar */}
  </aside>
  <main className="flex-1">
    {/* Content */}
  </main>
</div>`;

  const hoverExample = `// Interactive states
<button className="
  bg-primary text-primary-foreground
  hover:bg-primary/90
  focus:ring-2 focus:ring-ring
  active:scale-95
  transition-all
">
  Click me
</button>`;

  return (
    <div style={{ padding: spacing['3xl'], maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: spacing['3xl'], borderBottom: `1px solid ${colors.neutral[300]}`, paddingBottom: spacing.xl }}>
        <p style={{ ...typography.caption.md, color: colors.neutral[500], margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>
          Guide
        </p>
        <h1 style={{ ...typography.display.md, color: colors.neutral.darkest, margin: `${spacing.sm}px 0 0` }}>
          Tailwind CSS Migration
        </h1>
        <p style={{ ...typography.body.lg, color: colors.neutral[600], margin: `${spacing.md}px 0 0`, maxWidth: 700 }}>
          Guide for migrating components from inline styles to Tailwind CSS classes while maintaining 
          design token consistency across all Hearst brands.
        </p>
      </div>

      {/* Why Migrate */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Why Migrate to Tailwind?
        </h2>
        <ul style={{ ...typography.body.md, color: colors.neutral[700], margin: 0, paddingLeft: spacing.xl, display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          <li><strong>Responsive utilities</strong> — Use <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>md:</code>, <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>lg:</code> prefixes instead of media query logic in JS</li>
          <li><strong>Pseudo-states</strong> — Hover, focus, active states are trivial (<code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>hover:bg-primary</code>)</li>
          <li><strong>Smaller bundle</strong> — Tailwind purges unused styles; inline styles ship everything</li>
          <li><strong>Consistency with shadcn/ui</strong> — Our UI components already use Tailwind</li>
          <li><strong>Better DX</strong> — Autocomplete, shorter code, easier to scan</li>
        </ul>
      </section>

      {/* Before/After Comparison */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Before and After
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.lg }}>
          <CodeBlock code={beforeExample} title="Before (Inline Styles)" />
          <CodeBlock code={afterExample} title="After (Tailwind)" />
        </div>
      </section>

      {/* Token Mapping */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Token to Tailwind Mapping
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.xl }}>
          Reference for converting design tokens to Tailwind utility classes.
        </p>

        <TokenTable
          title="Colors"
          rows={[
            { token: 'colors.neutral.lightest', tailwind: 'bg-neutral-100', value: '#ffffff' },
            { token: 'colors.neutral[200]', tailwind: 'bg-neutral-200', value: '#f5f5f5' },
            { token: 'colors.neutral[300]', tailwind: 'border-neutral-300', value: '#ededed' },
            { token: 'colors.neutral[600]', tailwind: 'text-neutral-600', value: '#949494' },
            { token: 'colors.neutral[700]', tailwind: 'text-neutral-700', value: '#757575' },
            { token: 'colors.neutral.darkest', tailwind: 'text-neutral-900', value: '#222222' },
            { token: 'colors.primary', tailwind: 'bg-primary', value: 'var(--primary)' },
            { token: 'colors.brand.blue', tailwind: 'bg-brand-blue', value: 'var(--brand-blue)' },
          ]}
        />

        <TokenTable
          title="Spacing"
          rows={[
            { token: 'spacing.none', tailwind: 'p-0, m-0, gap-0', value: '0px' },
            { token: 'spacing["2xs"]', tailwind: 'p-1, m-1, gap-1', value: '4px' },
            { token: 'spacing.xs', tailwind: 'p-2, m-2, gap-2', value: '8px' },
            { token: 'spacing.sm', tailwind: 'p-3, m-3, gap-3', value: '12px' },
            { token: 'spacing.md', tailwind: 'p-4, m-4, gap-4', value: '16px' },
            { token: 'spacing.lg', tailwind: 'p-5, m-5, gap-5', value: '20px' },
            { token: 'spacing.xl', tailwind: 'p-6, m-6, gap-6', value: '24px' },
            { token: 'spacing["2xl"]', tailwind: 'p-8, m-8, gap-8', value: '32px' },
            { token: 'spacing["3xl"]', tailwind: 'p-12, m-12, gap-12', value: '48px' },
          ]}
        />

        <TokenTable
          title="Typography"
          rows={[
            { token: 'font.size.xs', tailwind: 'text-xs', value: '13px' },
            { token: 'font.size.sm', tailwind: 'text-sm', value: '14px' },
            { token: 'font.size.md', tailwind: 'text-base', value: '16px' },
            { token: 'font.size.lg', tailwind: 'text-lg', value: '18px' },
            { token: 'font.size.xl', tailwind: 'text-xl', value: '20px' },
            { token: 'font.size["2xl"]', tailwind: 'text-2xl', value: '24px' },
            { token: 'font.size["3xl"]', tailwind: 'text-3xl', value: '28px' },
            { token: 'font.weight.regular', tailwind: 'font-normal', value: '400' },
            { token: 'font.weight.medium', tailwind: 'font-medium', value: '500' },
            { token: 'font.weight.semibold', tailwind: 'font-semibold', value: '600' },
            { token: 'font.weight.bold', tailwind: 'font-bold', value: '700' },
          ]}
        />

        <TokenTable
          title="Layout"
          rows={[
            { token: 'display: "flex"', tailwind: 'flex', value: 'display: flex' },
            { token: 'flexDirection: "column"', tailwind: 'flex-col', value: 'flex-direction: column' },
            { token: 'flexDirection: "row"', tailwind: 'flex-row', value: 'flex-direction: row' },
            { token: 'alignItems: "center"', tailwind: 'items-center', value: 'align-items: center' },
            { token: 'justifyContent: "center"', tailwind: 'justify-center', value: 'justify-content: center' },
            { token: 'justifyContent: "between"', tailwind: 'justify-between', value: 'justify-content: space-between' },
            { token: 'flex: 1', tailwind: 'flex-1', value: 'flex: 1 1 0%' },
            { token: 'flexShrink: 0', tailwind: 'shrink-0', value: 'flex-shrink: 0' },
          ]}
        />

        <TokenTable
          title="Border Radius"
          rows={[
            { token: 'border.radius.none', tailwind: 'rounded-none', value: '0px' },
            { token: 'border.radius.sm', tailwind: 'rounded-sm', value: '4px' },
            { token: 'border.radius.md', tailwind: 'rounded-md', value: '8px' },
            { token: 'border.radius.lg', tailwind: 'rounded-lg', value: '12px' },
            { token: 'border.radius.full', tailwind: 'rounded-full', value: '9999px' },
          ]}
        />
      </section>

      {/* Common Patterns */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Common Patterns
        </h2>

        <ComparisonTable
          rows={[
            { before: 'display: "flex", flexDirection: "column", gap: 16', after: 'flex flex-col gap-4', description: 'Vertical flex container' },
            { before: 'display: "flex", alignItems: "center", justifyContent: "space-between"', after: 'flex items-center justify-between', description: 'Horizontal flex with space between' },
            { before: 'width: "100%", maxWidth: 1200, margin: "0 auto"', after: 'w-full max-w-[1200px] mx-auto', description: 'Centered container' },
            { before: 'padding: spacing.lg, backgroundColor: colors.neutral.lightest', after: 'p-5 bg-neutral-100', description: 'Padded white box' },
            { before: 'border: `1px solid ${colors.neutral[300]}`', after: 'border border-neutral-300', description: 'Standard border' },
            { before: 'position: "absolute", top: 0, right: 0', after: 'absolute top-0 right-0', description: 'Absolute positioning' },
            { before: 'overflow: "hidden", textOverflow: "ellipsis"', after: 'overflow-hidden truncate', description: 'Text truncation' },
          ]}
        />
      </section>

      {/* cn() Utility */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          The cn() Utility
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          Use the <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>cn()</code> utility 
          from <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>@/lib/utils</code> to 
          conditionally combine classes and allow className overrides:
        </p>
        <CodeBlock code={cnUtilityCode} title="Using cn() for conditional classes" />
      </section>

      {/* Responsive Design */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Responsive Design
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          Use Tailwind breakpoint prefixes instead of CSS media queries or JavaScript logic:
        </p>
        <CodeBlock code={responsiveExample} title="Responsive layout example" />
        
        <TokenTable
          title="Breakpoints"
          rows={[
            { token: '@media (min-width: 640px)', tailwind: 'sm:', value: '640px' },
            { token: '@media (min-width: 768px)', tailwind: 'md:', value: '768px' },
            { token: '@media (min-width: 1024px)', tailwind: 'lg:', value: '1024px' },
            { token: '@media (min-width: 1280px)', tailwind: 'xl:', value: '1280px' },
            { token: '@media (min-width: 1536px)', tailwind: '2xl:', value: '1536px' },
          ]}
        />
      </section>

      {/* Interactive States */}
      <section style={{ marginBottom: spacing['3xl'] }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Interactive States
        </h2>
        <p style={{ ...typography.body.md, color: colors.neutral[700], marginBottom: spacing.lg }}>
          Add hover, focus, and active states directly in the className:
        </p>
        <CodeBlock code={hoverExample} title="Interactive button example" />
      </section>

      {/* Migration Checklist */}
      <section style={{ marginBottom: spacing.xl }}>
        <h2 style={{ ...typography.heading.lg, color: colors.neutral.darkest, marginBottom: spacing.lg }}>
          Migration Checklist
        </h2>
        <ol style={{ ...typography.body.md, color: colors.neutral[700], margin: 0, paddingLeft: spacing.xl, display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          <li>Import <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>cn</code> from <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>@/lib/utils</code></li>
          <li>Remove local <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>tokens</code> object (use global Tailwind theme)</li>
          <li>Replace <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>style={`{{}}`}</code> props with <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>className</code></li>
          <li>Add <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>className</code> prop to component interface for customization</li>
          <li>Use <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>cn()</code> to merge base classes with passed className</li>
          <li>Replace media query logic with responsive prefixes (<code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>md:</code>, <code style={{ backgroundColor: colors.neutral[200], padding: '2px 6px', borderRadius: 4 }}>lg:</code>)</li>
          <li>Add hover/focus states where appropriate</li>
          <li>Test across all brand themes</li>
        </ol>
      </section>
    </div>
  );
}
