import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    menuColumns: {
      control: 'object',
      description: 'Array of menu column sections with titles and link arrays',
    },
    legalText: {
      control: 'object',
      description: 'Legal text strings (company, affiliate, copyright)',
    },
    legalLinks: {
      control: 'object',
      description: 'Array of legal/policy link labels',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuColumns: [
      { sectionTitle: 'About Us', links: ['Contact Us', 'How We Test Cars', 'How We Rate Cars', 'Hearst Autos', "What's My Car Worth?"] },
      { sectionTitle: 'Research Cars', links: ['Expert Reviews', 'Stories and Features', 'Expert-Tested Gear', 'Compare Cars', 'Shop Cars for Sale'] },
      { sectionTitle: 'All Car Rankings', links: ['Best SUVs', 'Best 3-Row SUVs', 'Best Hybrid SUVs', 'Best EVs'] },
      { sectionTitle: 'News', links: ['Newsletter', 'RSS Feed', 'Subscribe', 'Customer Service'] },
    ],
    legalText: {
      company: 'A Part of Hearst Digital Media',
      affiliate: 'We may earn a commission for purchases made through our links.',
      copyright: '©2026 Hearst Autos, Inc. All Rights Reserved.',
    },
    legalLinks: ['Privacy Notice', 'CA Notice at Collection', 'Your CA Privacy Rights/Shine the Light', 'DAA Industry Opt Out', 'Terms of Use', 'Site Map'],
  },
};

export const CustomColumns: Story = {
  args: {
    menuColumns: [
      { sectionTitle: 'Fashion', links: ['Trends', 'Street Style', 'Designers', 'Shopping'] },
      { sectionTitle: 'Beauty', links: ['Skincare', 'Makeup', 'Hair', 'Nails'] },
      { sectionTitle: 'Culture', links: ['Movies', 'TV', 'Books', 'Music'] },
    ],
    legalText: {
      company: 'A Part of Hearst Digital Media',
      affiliate: 'We may earn a commission for purchases made through our links.',
      copyright: '©2026 Hearst Magazine Media, Inc. All Rights Reserved.',
    },
    legalLinks: ['Privacy Notice', 'Terms of Use', 'Site Map'],
  },
};
