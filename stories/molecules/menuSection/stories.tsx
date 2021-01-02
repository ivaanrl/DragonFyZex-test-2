import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MenuSectionProps, MenuSection } from '.';

export default {
  title: 'molecules/Menu Section',
  component: MenuSection,
};

const Template: Story<MenuSectionProps> = (args) => <MenuSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'CONVENIENCE RETAILS',
  items: [
    {
      title: 'For C-Stores',
    },
    {
      title: 'Scan Data',
      subtitle: 'Earn more from brands and customers.',
    },
    {
      title: 'Engage',
      subtitle: 'Unlock exclusive brand promotions.',
    },
    {
      title: 'Pricing',
    },
  ],
};
