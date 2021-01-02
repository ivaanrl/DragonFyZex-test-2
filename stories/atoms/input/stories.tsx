import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Input, InputProps } from '.';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const LargeLightInput = Template.bind({});
LargeLightInput.args = {
  size: 'large',
  placeholder: 'Placeholder text',
};

export const InputWithValue = Template.bind({});
InputWithValue.args = {
  value: 'this is not placeholder',
};
