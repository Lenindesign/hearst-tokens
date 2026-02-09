import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { RightSidebarColumn } from './RightSidebarColumn';

const meta = {
  title: 'Components/RightSidebarColumn',
  component: RightSidebarColumn,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    cards: {
      control: 'object',
      description: 'Array of sidebar card objects (id, sectionLabel, title, dek, author, imageSrc, showPlayIcon)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof RightSidebarColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        id: 1,
        sectionLabel: 'ESSENTIAL READS',
        title: 'The 2026 Porsche 911 GT3 RS Redefines Track Performance',
        dek: 'With 518 horsepower and motorsport-derived aero, the GT3 RS sets a new benchmark.',
        author: 'By John Pearley Huffman',
        imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
      },
      {
        id: 2,
        sectionLabel: 'ESSENTIAL READS',
        title: "An F1 Fan's First Daytona 24 Hours",
        dek: 'A lifelong F1 fan attends his first 24-hour endurance race.',
        author: 'By Samantha MacAvoy',
        showPlayIcon: true,
      },
      {
        id: 3,
        sectionLabel: 'ESSENTIAL READS',
        title: 'Every New Car You Can Still Buy with a Stick Shift',
        dek: 'The cars on this list keep the #SaveTheManuals mission alive.',
        author: 'By Greg S. Fink and Joey Capparella',
      },
    ],
  },
};

export const WithAllImages: Story = {
  args: {
    cards: [
      {
        id: 1,
        sectionLabel: 'TOP PICKS',
        title: 'Porsche 911 GT3 RS Manthey Racing',
        dek: 'The ultimate track weapon gets even sharper.',
        author: 'By John Pearley Huffman',
        imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg?crop=0.921045192035863xw:1xh;center,top&resize=980:*',
      },
      {
        id: 2,
        sectionLabel: 'TOP PICKS',
        title: 'Toyota GR86 Yuzu Special Edition',
        dek: 'A vibrant tribute to driving joy.',
        author: 'By Joey Capparella',
        imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2026-toyota-gr86-yuzu-special-edition-pr-102-67ed5cc10d1ce.jpg?resize=768:*',
      },
      {
        id: 3,
        sectionLabel: 'TOP PICKS',
        title: '10Best Cars for 2026',
        dek: 'Our annual list of the best cars, trucks, and SUVs.',
        author: 'By Car and Driver',
        imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*',
      },
    ],
  },
};

export const SingleCard: Story = {
  args: {
    cards: [
      {
        id: 1,
        sectionLabel: 'FEATURED',
        title: 'The Most Important Cars of 2026',
        dek: 'A comprehensive look at the vehicles shaping the industry.',
        author: 'By Car and Driver Staff',
        imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2019-group-10best-1574285577.jpg?crop=1.00xw:0.751xh;0,0.199xh&resize=768:*',
      },
    ],
  },
};
