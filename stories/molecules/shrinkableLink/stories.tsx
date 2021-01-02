import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ShrinkableLinkProps, ShrinkableLink } from '.';
import { theme } from '../../../styles/theme';
import { MenuSection } from '../menuSection';

export default {
  title: 'molecules/ShrinkableLink',
  component: ShrinkableLink,
};

const Template: Story<ShrinkableLinkProps> = (args) => (
  <ShrinkableLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Products',
};

export const WithMenuSection = () => (
  <ShrinkableLink label="Products">
    <MenuSection
      title="CONVENIENCE RETAILS"
      items={[
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
      ]}
    />
  </ShrinkableLink>
);
