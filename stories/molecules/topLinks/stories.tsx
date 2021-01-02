import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TopLinkProps, TopLinks } from '.';

export default {
  title: 'molecules/Top links',
  cimponent: TopLinks,
};

const Template: Story<TopLinkProps> = (args) => <TopLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      href: '#',
      label: 'Products',
    },
    {
      href: '#',
      label: 'Resources',
    },
    {
      href: '#',
      label: 'Help Center',
    },
  ],
};
