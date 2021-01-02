import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { SidebarProps, Sidebar } from '.';
import { theme } from '../../../styles/theme';
import { MenuSection } from '../../molecules/menuSection';
import { TopLinks } from '../../molecules/topLinks';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
};

export const SidebarWithMenuItems = () => (
  <Sidebar>
    <TopLinks
      links={[
        { label: 'Products', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'HelpCenter', href: '#' },
      ]}
      customStyles={{
        height: '96px',
      }}
    />
    <MenuSection
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
      title="CONVENIENCE RETAILS"
    />
  </Sidebar>
);
