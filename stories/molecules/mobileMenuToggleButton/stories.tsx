import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MobileMenuToggleButton, MobileMenuToggleButtonProps } from '.';

export default {
  title: 'molecules/Mobile Menu Toggle Button',
  cimponent: MobileMenuToggleButton,
};

const Template: Story<MobileMenuToggleButtonProps> = (args) => (
  <MobileMenuToggleButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  setIsOpen: () => {},
};
