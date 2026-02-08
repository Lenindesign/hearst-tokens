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
    imageSrc: "https://hearts-tokens.netlify.app/_next/image?url=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2F2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg%3Fcrop%3D0.921045192035863xw%3A1xh%3Bcenter%2Ctop%26resize%3D980%3A*&w=3840&q=75"
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    imageSrc: "https://hearts-tokens.netlify.app/_next/image?url=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2F2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg%3Fcrop%3D0.921045192035863xw%3A1xh%3Bcenter%2Ctop%26resize%3D980%3A*&w=3840&q=75",
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
    imageSrc: "https://hearts-tokens.netlify.app/_next/image?url=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2F2025-porsche-911-gt3-rs-manthey-racing1-6740bdc5bdc0c.jpg%3Fcrop%3D0.921045192035863xw%3A1xh%3Bcenter%2Ctop%26resize%3D980%3A*&w=3840&q=75",
  },
};
