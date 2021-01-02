import React from 'react';
import { FooterBottom } from '.';

export default {
  title: 'molecules/footer bottom',
  component: FooterBottom,
};

export const Default = () => (
  <FooterBottom
    links={['TERMS', 'PRIVACY']}
    socialIcons={[
      '/images/socials/facebook.svg',
      '/images/socials/twitter.svg',
      '/images/socials/linkedin.svg',
    ]}
  />
);
