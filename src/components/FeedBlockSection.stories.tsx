import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FeedBlockSection } from './FeedBlockSection';

const meta = {
  title: 'Components/FeedBlockSection',
  component: FeedBlockSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Section headline',
    },
    bigStory: {
      control: 'object',
      description: 'Featured big story card data (imageSrc, eyebrow, title, author)',
    },
    sideCards: {
      control: 'object',
      description: 'Array of side story cards',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof FeedBlockSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Latest Stories',
    bigStory: {
      eyebrow: 'FIRST DRIVE',
      title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
      author: 'By John Pearley Huffman',
    },
    sideCards: [
      { id: 1, title: 'Rivian R2 First Look: A Smaller, More Affordable EV', subtitle: 'News', description: "Rivian's entry into the mainstream market starts under $50,000.", timestamp: '2 hrs ago', author: 'Joey Capparella', showDescription: true },
      { id: 2, title: '10Best Cars for 2026: The Absolute Best Vehicles on Sale', subtitle: "Buyer's Guide", timestamp: '4 hrs ago', author: 'Car and Driver', showDescription: false },
      { id: 3, title: 'Every New Car You Can Still Buy with a Stick Shift', subtitle: 'Feature', timestamp: '6 hrs ago', author: 'Greg S. Fink', showDescription: false },
      { id: 4, title: 'The Best SUVs for 2026 and Beyond', subtitle: 'Rankings', timestamp: '1 day ago', author: 'Car and Driver', showDescription: false },
    ],
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    bigStory: {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
      eyebrow: 'FIRST DRIVE',
      title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon',
      author: 'By John Pearley Huffman',
    },
  },
};

export const CustomHeadline: Story = {
  args: {
    ...Default.args,
    title: 'Editor\'s Picks',
  },
};
