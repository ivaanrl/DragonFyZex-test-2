import React from 'react';
import { MobileNavigation } from '.';
import { Link } from '../../atoms/link';
import { LoggedOut } from '../../molecules/loggedOut';
import { MenuSection } from '../../molecules/menuSection';
import { ShrinkableLink } from '../../molecules/shrinkableLink';

export default {
  title: 'organisms/MobileNavigation',
  component: MobileNavigation,
};

export const Example = () => (
  <MobileNavigation>
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
        styles={{ paddingLeft: '20px' }}
      />
    </ShrinkableLink>
    <Link styles={{ paddingLeft: '20px' }}>Resources</Link>
    <Link styles={{ paddingLeft: '20px' }}>Help Center</Link>
    <LoggedOut />
  </MobileNavigation>
);
