import React from 'react';
import { TitleWithCTAInput } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'layouts/title with a call to action input',
  component: TitleWithCTAInput,
};

export const FirstExampleInSite = () => (
  <TitleWithCTAInput
    CTAText="Subscribe"
    PlaceholderText="Enter email address"
    backgroundColor={theme.yellow}
  >
    Skupos is sweeping the c-store nation. Send the latest stories to your
    inbox.
  </TitleWithCTAInput>
);

export const SecondExampleInSite = () => (
  <TitleWithCTAInput CTAText="Subscribe" PlaceholderText="Enter email address">
    Never miss a captivating success story. Send the latest stories to your
    inbox.
  </TitleWithCTAInput>
);
