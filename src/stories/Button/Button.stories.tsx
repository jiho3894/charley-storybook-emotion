import Button from './Button';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Charley/Button',
  component: Button,
  decorators: [(Story: StoryFn) => <Story />],
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
