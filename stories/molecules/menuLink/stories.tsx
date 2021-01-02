import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MenuLinkProps, MenuLink } from '.';

export default {
  title: 'molecules/Menu Link',
  cimponent: MenuLink,
};

const Template: Story<MenuLinkProps> = (args) => <MenuLink {...args} />;

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: 'For C-Stores',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  title: 'Scan Data',
  subtitle: 'Earn more from brands and customers',
};
