import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Badge label content',
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style variant',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'First Drive',
  },
};

export const Secondary: Story = {
  args: {
    children: 'News',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Breaking',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Review',
    variant: 'outline',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Breaking</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
