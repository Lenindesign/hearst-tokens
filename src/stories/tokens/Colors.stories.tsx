import type { Meta, StoryObj } from '@storybook/nextjs-vite';

function ColorSwatch({ name, value, cssVar }: { name: string; value: string; cssVar?: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div
        className="w-12 h-12 rounded-md border border-neutral-400 flex-shrink-0"
        style={{ backgroundColor: cssVar ? `var(${cssVar})` : value }}
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{value}</span>
        {cssVar && <span className="text-xs text-muted-foreground font-mono">{cssVar}</span>}
      </div>
    </div>
  );
}

function NeutralColors() {
  const neutrals = [
    { name: 'neutral-100', value: '#ffffff' },
    { name: 'neutral-200', value: '#f5f5f5' },
    { name: 'neutral-300', value: '#ededed' },
    { name: 'neutral-400', value: '#d6d6d6' },
    { name: 'neutral-500', value: '#bdbdbd' },
    { name: 'neutral-600', value: '#949494' },
    { name: 'neutral-700', value: '#757575' },
    { name: 'neutral-800', value: '#575757' },
    { name: 'neutral-900', value: '#222222' },
    { name: 'neutral-1000', value: '#121212' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Neutral Gray Scale</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Static neutral colors shared across all brands. Use <code className="bg-muted px-1 rounded text-xs">bg-neutral-*</code> and <code className="bg-muted px-1 rounded text-xs">text-neutral-*</code> Tailwind classes.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {neutrals.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-2">
            <div
              className="w-full h-20 rounded-lg border border-neutral-400"
              style={{ backgroundColor: c.value }}
            />
            <span className="text-xs font-semibold text-foreground">{c.name}</span>
            <span className="text-xs text-muted-foreground font-mono">{c.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticColors() {
  const semanticColors = [
    { name: 'Background', cssVar: '--background' },
    { name: 'Foreground', cssVar: '--foreground' },
    { name: 'Primary', cssVar: '--primary' },
    { name: 'Primary Foreground', cssVar: '--primary-foreground' },
    { name: 'Secondary', cssVar: '--secondary' },
    { name: 'Secondary Foreground', cssVar: '--secondary-foreground' },
    { name: 'Muted', cssVar: '--muted' },
    { name: 'Muted Foreground', cssVar: '--muted-foreground' },
    { name: 'Accent', cssVar: '--accent' },
    { name: 'Accent Foreground', cssVar: '--accent-foreground' },
    { name: 'Destructive', cssVar: '--destructive' },
    { name: 'Destructive Foreground', cssVar: '--destructive-foreground' },
    { name: 'Card', cssVar: '--card' },
    { name: 'Card Foreground', cssVar: '--card-foreground' },
    { name: 'Border', cssVar: '--border' },
    { name: 'Input', cssVar: '--input' },
    { name: 'Ring', cssVar: '--ring' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Semantic Colors</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Theme-aware colors that change when you switch brands using the toolbar above. Use <code className="bg-muted px-1 rounded text-xs">bg-primary</code>, <code className="bg-muted px-1 rounded text-xs">text-foreground</code>, etc.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {semanticColors.map((c) => (
          <div key={c.cssVar} className="flex flex-col items-center gap-2">
            <div
              className="w-full h-20 rounded-lg border border-neutral-400"
              style={{ backgroundColor: `var(${c.cssVar})` }}
            />
            <span className="text-xs font-semibold text-foreground">{c.name}</span>
            <span className="text-xs text-muted-foreground font-mono">{c.cssVar}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandColors() {
  const brandColors = [
    { name: 'Brand Dark', cssVar: '--brand-dark' },
    { name: 'Brand Blue', cssVar: '--brand-blue' },
    { name: 'Brand Gold', cssVar: '--brand-gold' },
    { name: 'Brand Red', cssVar: '--brand-red' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Brand Colors</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Per-brand accent colors. Switch themes in the toolbar to see them change.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brandColors.map((c) => (
          <div key={c.cssVar} className="flex flex-col items-center gap-2">
            <div
              className="w-full h-20 rounded-lg border border-neutral-400"
              style={{ backgroundColor: `var(${c.cssVar})` }}
            />
            <span className="text-xs font-semibold text-foreground">{c.name}</span>
            <span className="text-xs text-muted-foreground font-mono">{c.cssVar}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

export const Neutral: StoryObj = {
  render: () => <NeutralColors />,
};

export const Semantic: StoryObj = {
  render: () => <SemanticColors />,
};

export const Brand: StoryObj = {
  render: () => <BrandColors />,
};

export const AllColors: StoryObj = {
  render: () => (
    <div className="space-y-12">
      <SemanticColors />
      <BrandColors />
      <NeutralColors />
    </div>
  ),
};
