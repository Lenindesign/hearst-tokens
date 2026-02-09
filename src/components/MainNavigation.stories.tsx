import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MainNavigation } from './MainNavigation';

const meta = {
  title: 'Components/MainNavigation',
  component: MainNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    brandName: {
      control: 'text',
      description: 'Brand name displayed in the navigation bar',
    },
    menuLinks: {
      control: 'object',
      description: 'Array of navigation menu links',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onMenuClick: {
      action: 'menu clicked',
      description: 'Callback when hamburger menu is clicked',
    },
    onSearch: {
      action: 'search',
      description: 'Callback when search is submitted',
    },
  },
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandName: 'HEARST',
    menuLinks: [
      { label: 'SHOP NEW CARS' },
      { label: 'SHOP USED CARS' },
      { label: 'RESEARCH CARS' },
      { label: 'EXPERT REVIEWS' },
      { label: "WHAT'S MY CAR WORTH?" },
      { label: 'EXPERT-TESTED GEAR' },
      { label: 'NEWS + STORIES' },
    ],
  },
};

export const CustomBrand: Story = {
  args: {
    ...Default.args,
    brandName: 'ESQUIRE',
    menuLinks: [
      { label: 'STYLE' },
      { label: 'FOOD & DRINK' },
      { label: 'ENTERTAINMENT' },
      { label: 'NEWS & POLITICS' },
      { label: 'LIFESTYLE' },
    ],
  },
};

export const MinimalLinks: Story = {
  args: {
    ...Default.args,
    menuLinks: [
      { label: 'HOME' },
      { label: 'ABOUT' },
      { label: 'CONTACT' },
    ],
  },
};
