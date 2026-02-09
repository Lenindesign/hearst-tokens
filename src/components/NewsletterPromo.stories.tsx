import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NewsletterPromo } from './NewsletterPromo';

const meta = {
  title: 'Components/NewsletterPromo',
  component: NewsletterPromo,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    eyebrow: {
      control: 'text',
      description: 'Newsletter name / brand line shown above the title',
    },
    title: {
      control: 'text',
      description: 'Main headline for the newsletter promo',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the wrapper',
    },
  },
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
