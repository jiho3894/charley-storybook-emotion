import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Charley/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { defaultValue: '제출하기' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};
