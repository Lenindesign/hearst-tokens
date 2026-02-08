import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';

const HEARST_BRANDS = [
  { value: 'car-and-driver', title: 'Car and Driver' },
  { value: 'esquire', title: 'Esquire' },
  { value: 'cosmopolitan', title: 'Cosmopolitan' },
  { value: 'good-housekeeping', title: 'Good Housekeeping' },
  { value: 'harpers-bazaar', title: "Harper's Bazaar" },
  { value: 'elle', title: 'Elle' },
  { value: 'delish', title: 'Delish' },
  { value: 'mens-health', title: "Men's Health" },
  { value: 'womens-health', title: "Women's Health" },
  { value: 'popular-mechanics', title: 'Popular Mechanics' },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    layout: 'padded',
  },
  globalTypes: {
    theme: {
      name: 'Brand Theme',
      description: 'Switch between Hearst brand themes',
      defaultValue: 'car-and-driver',
      toolbar: {
        icon: 'paintbrush',
        items: HEARST_BRANDS,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'car-and-driver';

      // Apply data-theme to the document for global CSS variable switching
      document.documentElement.setAttribute('data-theme', theme);

      return Story();
    },
  ],
};

export default preview;
