import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { theme } from '../../../styles/theme';
import { Button, ButtonProps } from './index';

export default {
  title: 'atoms/Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
  primary: true,
  label: 'Long Text Button',
  size: 'large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  primary: false,
  label: 'Long Text Button',
  size: 'large',
};

export const NoBorderSecondary = Template.bind({});
NoBorderSecondary.args = {
  primary: false,
  label: 'Button',
  noBorder: true,
};
