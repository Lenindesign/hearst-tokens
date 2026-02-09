import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FourAcrossGrid } from './FourAcrossGrid';

const meta = {
  title: 'Components/FourAcrossGrid',
  component: FourAcrossGrid,
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
      description: 'Array of card objects (id, imageSrc, title, author)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof FourAcrossGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Trending Now',
    cards: [
      { id: 1, title: 'The 2026 Porsche 911 GT3 RS Is the Ultimate Track Weapon', author: 'John Pearley Huffman' },
      { id: 2, title: 'Rivian R2 First Look: A Smaller, More Affordable EV', author: 'Joey Capparella' },
      { id: 3, title: '10Best Cars for 2026: The Absolute Best Vehicles on Sale', author: 'Car and Driver' },
      { id: 4, title: 'Every New Car You Can Still Buy with a Stick Shift', author: 'Greg S. Fink' },
    ],
  },
};

export const WithImages: Story = {
  args: {
    ...Default.args,
    cards: [
      { id: 1, title: 'Porsche 911 GT3 RS Manthey Racing', author: 'John Pearley Huffman', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*' },
      { id: 2, title: 'Toyota GR86 Yuzu Special Edition', author: 'Joey Capparella', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*' },
      { id: 3, title: '10Best Cars for 2026', author: 'Car and Driver', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*' },
      { id: 4, title: 'Hyundai N Vision Concept', author: 'Greg S. Fink', imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/large-50504-hyundaimotorsnbrandunveilstworollinglabconceptssignalinghigh-performancevisionforelectrificationera-64022c1e8f358.jpg?crop=1xw:1xh;center,top&resize=768:*' },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    ...Default.args,
    title: "Editor's Picks",
  },
};
