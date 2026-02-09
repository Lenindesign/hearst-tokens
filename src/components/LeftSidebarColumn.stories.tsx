import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LeftSidebarColumn } from './LeftSidebarColumn';

const meta = {
  title: 'Components/LeftSidebarColumn',
  component: LeftSidebarColumn,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Column section title',
    },
    stories: {
      control: 'object',
      description: 'Array of story items (id, title, timestamp, imageSrc, showPlayIcon)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof LeftSidebarColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Latest News',
    stories: [
      { id: 1, title: 'Porsche 911 GT3 RS Sets New Nürburgring Lap Record', timestamp: '2 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*' },
      { id: 2, title: 'Toyota GR86 Gets Yuzu Special Edition for 2026', timestamp: '4 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*' },
      { id: 3, title: 'Every New Car You Can Still Buy with a Stick Shift', timestamp: '6 hrs ago' },
      { id: 4, title: 'The Best SUVs for 2026 and Beyond', timestamp: '1 day ago' },
      { id: 5, title: 'Hyundai Planning to Drop Santa Cruz Pickup', timestamp: '3 hrs ago', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/large-50504-hyundaimotorsnbrandunveilstworollinglabconceptssignalinghigh-performancevisionforelectrificationera-64022c1e8f358.jpg?crop=1xw:1xh;center,top&resize=768:*' },
    ],
  },
};

export const WithPlayIcons: Story = {
  args: {
    title: 'Video Stories',
    stories: [
      { id: 1, title: 'Watch: Inside the New Porsche GT3 RS', timestamp: '1 hr ago', showPlayIcon: true, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*' },
      { id: 2, title: 'Toyota GR86 Track Test', timestamp: '3 hrs ago', showPlayIcon: true, imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*' },
      { id: 3, title: 'Lightning Lap 2026 Preview', timestamp: '1 day ago', showPlayIcon: true },
    ],
  },
};

export const TextOnly: Story = {
  args: {
    title: 'Trending',
    stories: [
      { id: 1, title: 'Every New Car You Can Still Buy with a Stick Shift', timestamp: '2 hrs ago' },
      { id: 2, title: 'The Best SUVs for 2026 and Beyond', timestamp: '4 hrs ago' },
      { id: 3, title: '10Best Cars for 2026: The Absolute Best Vehicles on Sale', timestamp: '6 hrs ago' },
      { id: 4, title: 'Rivian R2 First Look: A Smaller, More Affordable EV', timestamp: '1 day ago' },
    ],
  },
};
