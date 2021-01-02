import React from 'react';
import { Footer } from '.';

export default {
  title: 'organisms/Footer',
  component: Footer,
};

export const Default = () => (
  <Footer
    footerGridSectionProps={{
      footerSectionProps: [
        {
          title: 'CONVENIENCE RETAIL',
          items: [
            { label: 'Overview', href: '#' },
            { label: 'Scan ata', href: '#' },
            { label: 'Engage', href: '#' },
            { label: 'Pricing', href: '#' },
          ],
        },
        {
          title: 'CONVENIENCE RETAIL',
          items: [
            { label: 'Overview', href: '#' },
            { label: 'Scan ata', href: '#' },
            { label: 'Engage', href: '#' },
            { label: 'Pricing', href: '#' },
          ],
        },
        {
          title: 'CONVENIENCE RETAIL',
          items: [
            { label: 'Overview', href: '#' },
            { label: 'Scan ata', href: '#' },
            { label: 'Engage', href: '#' },
            { label: 'Pricing', href: '#' },
          ],
        },
        {
          title: 'CONVENIENCE RETAIL',
          items: [
            { label: 'Overview', href: '#' },
            { label: 'Scan ata', href: '#' },
            { label: 'Engage', href: '#' },
            { label: 'Pricing', href: '#' },
          ],
        },
      ],
    }}
    footerBottomProps={{
      links: ['TERMS', 'PRIVACY'],
      socialIcons: [
        '/images/socials/facebook.svg',
        '/images/socials/twitter.svg',
        '/images/socials/linkedin.svg',
      ],
    }}
  />
);
