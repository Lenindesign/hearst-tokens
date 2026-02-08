import type { Meta, StoryObj } from '@storybook/nextjs-vite';

function ShadowScale() {
  const shadows = [
    { name: 'none', class: 'shadow-none' },
    { name: 'sm', class: 'shadow-sm' },
    { name: 'md', class: 'shadow-md' },
    { name: 'lg', class: 'shadow-lg' },
    { name: 'xl', class: 'shadow-xl' },
    { name: '2xl', class: 'shadow-2xl' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Elevation / Shadows</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Use <code className="bg-muted px-1 rounded text-xs">shadow-*</code> Tailwind classes.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {shadows.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-3">
            <div className={`w-full h-24 bg-card rounded-lg ${s.class} flex items-center justify-center border border-border`}>
              <span className="text-sm font-mono text-muted-foreground">{s.class}</span>
            </div>
            <span className="text-sm font-semibold text-foreground">shadow-{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Shadows',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

export const Scale: StoryObj = {
  render: () => <ShadowScale />,
};
