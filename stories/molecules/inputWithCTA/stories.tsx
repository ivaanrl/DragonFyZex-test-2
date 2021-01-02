import React from 'react';
import { InputWithCTA } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'molecules/Input with call to action',
  component: InputWithCTA,
};

export const Example = () => (
  <InputWithCTA
    CTAText="Subscribe"
    inputPlaceholder="Enter your email address"
  />
);

export const DarkExample = () => (
  <InputWithCTA
    CTAText="Subscribe"
    inputPlaceholder="Enter your email address"
    inputColor="dark"
    primaryButton={false}
    backgroundColor={theme.skBlack}
  />
);
