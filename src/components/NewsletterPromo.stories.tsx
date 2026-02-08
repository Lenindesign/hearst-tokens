import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NewsletterPromo } from './NewsletterPromo';

const meta = {
  title: 'Components/NewsletterPromo',
  component: NewsletterPromo,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewsletterPromo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'Car and Driver Newsletter',
    title: 'Get the Best Car News Delivered to Your Inbox',
  },
};

export const CustomTitle: Story = {
  args: {
    eyebrow: 'Esquire Style',
    title: 'Your Weekly Guide to Living Well',
  },
};

export const ConstrainedWidth: Story = {
  args: {
    ...Default.args,
    className: 'max-w-[500px]',
  },
};
