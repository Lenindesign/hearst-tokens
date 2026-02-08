import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BigCard } from './BigCard';

const meta = {
  title: 'Components/BigCard',
  component: BigCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
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
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-rs-101-6724bfa49d1e6.jpg?crop=0.677xw:0.508xh;0.145xw,0.324xh&resize=1200:*',
    imageAlt: 'Porsche 911 GT3 RS',
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

export const ConstrainedWidth: Story = {
  args: {
    ...Default.args,
    className: 'max-w-[600px]',
    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-110-672b4de988e1d.jpg?crop=0.668xw:0.501xh;0.142xw,0.363xh&resize=1200:*',
  },
};
