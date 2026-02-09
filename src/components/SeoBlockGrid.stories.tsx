import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SeoBlockGrid } from './SeoBlockGrid';

const meta = {
  title: 'Components/SeoBlockGrid',
  component: SeoBlockGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Section headline above the grid',
    },
    cards: {
      control: 'object',
      description: 'Array of card objects (id, imageSrc, title)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof SeoBlockGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Best Cars by Category',
    cards: [
      { id: 1, title: 'Best Sedans' },
      { id: 2, title: 'Best SUVs' },
      { id: 3, title: 'Best Trucks' },
      { id: 4, title: 'Best Electric Cars' },
      { id: 5, title: 'Best Hybrid Cars' },
      { id: 6, title: 'Best Sports Cars' },
      { id: 7, title: 'Best Luxury Cars' },
      { id: 8, title: 'Best Minivans' },
      { id: 9, title: 'Best Compact Cars' },
      { id: 10, title: 'Best Wagons' },
      { id: 11, title: 'Best Coupes' },
      { id: 12, title: 'Best Convertibles' },
    ],
  },
};

export const WithImages: Story = {
  args: {
    title: 'Popular Reviews',
    cards: [
      { id: 1, title: 'Best Sedans', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*' },
      { id: 2, title: 'Best SUVs', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*' },
      { id: 3, title: 'Best Trucks', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*' },
      { id: 4, title: 'Best Electric Cars' },
      { id: 5, title: 'Best Hybrid Cars' },
      { id: 6, title: 'Best Sports Cars' },
    ],
  },
};

export const FewCards: Story = {
  args: {
    title: 'Quick Links',
    cards: [
      { id: 1, title: 'New Car Reviews' },
      { id: 2, title: 'Car Comparisons' },
      { id: 3, title: 'Buying Guides' },
      { id: 4, title: 'Car Rankings' },
    ],
  },
};
