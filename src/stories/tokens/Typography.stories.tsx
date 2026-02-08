import type { Meta, StoryObj } from '@storybook/nextjs-vite';

function FontFamilies() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Font Families</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Switch brands in the toolbar to see how fonts change per theme.
      </p>
      <div className="space-y-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">font-sans (Primary)</span>
          <p className="font-sans text-3xl mt-2 text-foreground">The quick brown fox jumps over the lazy dog</p>
          <p className="text-xs text-muted-foreground mt-1 font-mono">var(--font-primary)</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">font-display (Display)</span>
          <p className="font-display text-3xl mt-2 text-foreground" style={{ fontWeight: 'var(--font-display-weight, 700)' as any }}>The quick brown fox jumps over the lazy dog</p>
          <p className="text-xs text-muted-foreground mt-1 font-mono">var(--font-display)</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">font-serif (Serif)</span>
          <p className="font-serif text-3xl mt-2 text-foreground">The quick brown fox jumps over the lazy dog</p>
          <p className="text-xs text-muted-foreground mt-1 font-mono">var(--font-serif)</p>
        </div>
      </div>
    </div>
  );
}

function FontSizes() {
  const sizes = [
    { name: '3xs', value: '10px', class: 'text-3xs' },
    { name: '2xs', value: '12px', class: 'text-2xs' },
    { name: 'xs', value: '13px', class: 'text-xs' },
    { name: 'sm', value: '14px', class: 'text-sm' },
    { name: 'base', value: '16px', class: 'text-base' },
    { name: 'lg', value: '18px', class: 'text-lg' },
    { name: 'xl', value: '20px', class: 'text-xl' },
    { name: '2xl', value: '24px', class: 'text-2xl' },
    { name: '3xl', value: '28px', class: 'text-3xl' },
    { name: '4xl', value: '32px', class: 'text-4xl' },
    { name: '5xl', value: '40px', class: 'text-5xl' },
    { name: '6xl', value: '48px', class: 'text-6xl' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Font Sizes</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Use <code className="bg-muted px-1 rounded text-xs">text-*</code> Tailwind classes.
      </p>
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        {sizes.map((s) => (
          <div key={s.name} className="flex items-baseline gap-4">
            <div className="w-16 flex-shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{s.name}</span>
            </div>
            <div className="w-12 flex-shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{s.value}</span>
            </div>
            <span className={`${s.class} text-foreground`}>
              Automotive journalism
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FontWeights() {
  const weights = [
    { name: 'normal', value: '400', class: 'font-normal' },
    { name: 'medium', value: '500', class: 'font-medium' },
    { name: 'semibold', value: '600', class: 'font-semibold' },
    { name: 'bold', value: '700', class: 'font-bold' },
    { name: 'extrabold', value: '800', class: 'font-extrabold' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Font Weights</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Use <code className="bg-muted px-1 rounded text-xs">font-*</code> Tailwind classes.
      </p>
      <div className="bg-card rounded-lg border border-border p-6 space-y-3">
        {weights.map((w) => (
          <div key={w.name} className="flex items-baseline gap-4">
            <div className="w-24 flex-shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{w.name} ({w.value})</span>
            </div>
            <span className={`${w.class} text-xl text-foreground`}>
              The 2026 Porsche 911 GT3 RS
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

export const Families: StoryObj = {
  render: () => <FontFamilies />,
};

export const Sizes: StoryObj = {
  render: () => <FontSizes />,
};

export const Weights: StoryObj = {
  render: () => <FontWeights />,
};

export const AllTypography: StoryObj = {
  render: () => (
    <div className="space-y-12">
      <FontFamilies />
      <FontSizes />
      <FontWeights />
    </div>
  ),
};
