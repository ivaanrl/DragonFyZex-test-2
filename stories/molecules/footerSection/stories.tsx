import React from 'react';
import { FooterSection } from '.';

export default {
  title: 'molecules/footer section',
  component: FooterSection,
};

export const Example = () => (
  <FooterSection
    title="CONVENIENCE RETAIL"
    items={[
      { label: 'Overview', href: '#' },
      { label: 'Scan ata', href: '#' },
      { label: 'Engage', href: '#' },
      { label: 'Pricing', href: '#' },
    ]}
  />
);
