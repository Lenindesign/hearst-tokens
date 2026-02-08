import type { Meta, StoryObj } from '@storybook/nextjs-vite';

function BorderRadiusScale() {
  const radii = [
    { name: 'none', value: '0px', class: 'rounded-none' },
    { name: 'sm', value: '4px', class: 'rounded-sm' },
    { name: 'md', value: '8px', class: 'rounded-md' },
    { name: 'lg', value: '12px', class: 'rounded-lg' },
    { name: 'xl', value: '16px', class: 'rounded-xl' },
    { name: '2xl', value: '20px', class: 'rounded-2xl' },
    { name: 'full', value: '9999px', class: 'rounded-full' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Border Radius</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Use <code className="bg-muted px-1 rounded text-xs">rounded-*</code> Tailwind classes. The theme <code className="bg-muted px-1 rounded text-xs">--radius</code> variable also changes per brand.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {radii.map((r) => (
          <div key={r.name} className="flex flex-col items-center gap-3">
            <div className={`w-24 h-24 bg-primary ${r.class} flex items-center justify-center`}>
              <span className="text-primary-foreground text-xs font-semibold">{r.value}</span>
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-foreground block">rounded-{r.name}</span>
              <span className="text-xs font-mono text-muted-foreground">{r.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-foreground mb-2">Theme Radius</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Each brand sets a default <code className="bg-muted px-1 rounded text-xs">--radius</code> value. Switch themes to see it change.
        </p>
        <div className="flex items-center gap-6">
          <div
            className="w-32 h-20 bg-primary flex items-center justify-center"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <span className="text-primary-foreground text-xs font-semibold">--radius</span>
          </div>
          <span className="text-sm text-muted-foreground font-mono">var(--radius)</span>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Border Radius',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

export const Scale: StoryObj = {
  render: () => <BorderRadiusScale />,
};
