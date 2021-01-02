import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Link, LinkProps } from '.';

export default {
  title: 'atoms/Link',
  component: Link,
};

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  label: 'Normal link',
  route: '#',
};

export const Light = Template.bind({});
Light.args({
  label: 'White link',
  route: '#',
});

export const NotHoverable = Template.bind({});
NotHoverable.args({
  hoverable: false,
  route: '#',
});

export const LightSmall = Template.bind({});
LightSmall.args({
  color: 'light',
  size: 'small',
  route: '#',
});
