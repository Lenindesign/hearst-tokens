import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BigStoryCard } from './BigStoryCard';

const sampleImages = {
  'Porsche GT3 RS': 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
  'Toyota GR86': 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*',
  '10Best Cars': 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*',
  'None (placeholder)': undefined,
};

const meta = {
  title: 'Components/BigStoryCard',
  component: BigStoryCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'select',
      options: Object.keys(sampleImages),
      mapping: sampleImages,
      description: 'Image source URL. Shows a placeholder when empty.',
    },
    eyebrow: {
      control: 'text',
      description: 'Eyebrow label above the title',
    },
    title: {
      control: 'text',
      description: 'Card headline',
    },
    author: {
      control: 'text',
      description: 'Author byline',
    },
    showEyebrow: {
      control: 'boolean',
      description: 'Toggle eyebrow visibility',
    },
    showAuthor: {
      control: 'boolean',
      description: 'Toggle author visibility',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof BigStoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'FIRST DRIVE',
    title: 'Big Card Title Goes Here. Will be Two Lines. Big Card Title Goes Here.',
    author: 'By John Pearley Huffman',
    showEyebrow: true,
    showAuthor: true,
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    imageSrc: sampleImages['Porsche GT3 RS'],
    title: 'The 2026 Porsche 911 GT3 RS Redefines Track Performance',
  },
};

export const NoEyebrow: Story = {
  args: {
    ...Default.args,
    imageSrc: sampleImages['Toyota GR86'],
    showEyebrow: false,
  },
};

export const NoAuthor: Story = {
  args: {
    ...Default.args,
    imageSrc: sampleImages['10Best Cars'],
    showAuthor: false,
    title: '10Best Cars for 2026: The Absolute Best Vehicles on Sale',
  },
};
