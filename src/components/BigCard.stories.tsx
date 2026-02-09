import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BigCard } from './BigCard';

const sampleImages = {
  'Porsche GT3 RS': 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
  'Toyota GR86': 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*',
  '10Best Cars': 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*',
  'None (placeholder)': undefined,
};

const meta = {
  title: 'Components/BigCard',
  component: BigCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'select',
      options: sampleImages,
      description: 'Image source URL. Shows a checkerboard placeholder when empty.',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    eyebrow: {
      control: 'text',
      description: 'Eyebrow / section label above the title',
    },
    title: {
      control: 'text',
      description: 'Card headline',
    },
    description: {
      control: 'text',
      description: 'Card description text',
    },
    author: {
      control: 'text',
      description: 'Author or byline text',
    },
    showDescription: {
      control: 'boolean',
      description: 'Toggle description visibility',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the card wrapper',
    },
  },
} satisfies Meta<typeof BigCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'FEATURED',
    title: '2026 Pilot Does Just Enough to Stay Afloat',
    description: "The upgraded Pilot's extra equipment and freshened look help it remain a solid, if unexciting, choice in this competitive segment.",
    author: 'Reviewed By Joey Capparella',
    showDescription: true,
    imageSrc: sampleImages['Porsche GT3 RS'],
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    imageSrc: sampleImages['Toyota GR86'],
    imageAlt: 'Toyota GR86 Yuzu Edition',
    title: 'The 2026 Porsche 911 GT3 RS Redefines What a Track Car Can Be',
    eyebrow: 'FIRST DRIVE',
  },
};

export const NoDescription: Story = {
  args: {
    ...Default.args,
    showDescription: false,
  },
};

export const NoImage: Story = {
  args: {
    ...Default.args,
    imageSrc: undefined,
    title: 'Card Without an Image Shows Placeholder',
  },
};

export const ConstrainedWidth: Story = {
  args: {
    ...Default.args,
    className: 'max-w-[600px]',
    imageSrc: sampleImages['10Best Cars'],
  },
};
