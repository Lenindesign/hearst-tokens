import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toast } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast notification message',
    },
    isVisible: {
      control: 'boolean',
      description: 'Controls toast visibility',
    },
    onHide: {
      action: 'hidden',
      description: 'Callback when toast is dismissed',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Theme changed successfully!',
    isVisible: true,
    onHide: () => {},
  },
};

export const LongMessage: Story = {
  args: {
    message: 'Your preferences have been saved. The new theme will be applied across all components in the design system.',
    isVisible: true,
    onHide: () => {},
  },
};

export const Hidden: Story = {
  args: {
    message: 'This toast is hidden',
    isVisible: false,
    onHide: () => {},
  },
};

export const Interactive: Story = {
  args: {
    message: 'Click the button to show a toast!',
    isVisible: false,
    onHide: () => {},
  },
  render: function InteractiveToast() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('Theme updated!');

    return (
      <div className="space-y-4 text-center">
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => { setMessage('Theme changed to Car and Driver!'); setVisible(true); }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"
          >
            Show Toast
          </button>
          <button
            onClick={() => { setMessage('Settings saved successfully.'); setVisible(true); }}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
          >
            Another Toast
          </button>
        </div>
        <Toast message={message} isVisible={visible} onHide={() => setVisible(false)} />
      </div>
    );
  },
};
