import type { Meta, StoryObj } from '@storybook/nextjs-vite';

function SpacingScale() {
  const spacings = [
    { name: '0', value: '0px', class: 'w-0' },
    { name: '0.5', value: '2px', class: 'w-0.5' },
    { name: '1', value: '4px', class: 'w-1' },
    { name: '2', value: '8px', class: 'w-2' },
    { name: '3', value: '12px', class: 'w-3' },
    { name: '4', value: '16px', class: 'w-4' },
    { name: '5', value: '20px', class: 'w-5' },
    { name: '6', value: '24px', class: 'w-6' },
    { name: '8', value: '32px', class: 'w-8' },
    { name: '10', value: '40px', class: 'w-10' },
    { name: '12', value: '48px', class: 'w-12' },
    { name: '16', value: '64px', class: 'w-16' },
    { name: '20', value: '80px', class: 'w-20' },
    { name: '24', value: '96px', class: 'w-24' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Spacing Scale</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Used for padding, margin, and gap. Use <code className="bg-muted px-1 rounded text-xs">p-*</code>, <code className="bg-muted px-1 rounded text-xs">m-*</code>, <code className="bg-muted px-1 rounded text-xs">gap-*</code> Tailwind classes.
      </p>
      <div className="bg-card rounded-lg border border-border p-6 space-y-3">
        {spacings.map((s) => (
          <div key={s.name} className="flex items-center gap-4">
            <div className="w-10 flex-shrink-0 text-right">
              <span className="text-xs font-mono font-semibold text-foreground">{s.name}</span>
            </div>
            <div className="w-12 flex-shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{s.value}</span>
            </div>
            <div className={`${s.class} h-4 bg-primary rounded-sm flex-shrink-0`} />
          </div>
        ))}
      </div>
    </div>
  );
}

const meta = {
  title: 'Tokens/Spacing',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

export const Scale: StoryObj = {
  render: () => <SpacingScale />,
};
