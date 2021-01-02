import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Navbar, NavbarProps } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'organisms/Navbar',
  component: Navbar,
};

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const YellowNavbar = Template.bind({});
YellowNavbar.args = {
  backgroundColor: theme.yellow,
};
