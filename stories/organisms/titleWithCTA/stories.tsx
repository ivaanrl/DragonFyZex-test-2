import React from 'react';
import { TitleWithCTA } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'layouts/title with call to action',
  component: TitleWithCTA,
};

export const FirstExampleInSite = () => (
  <TitleWithCTA
    CTAText="See how they did it"
    buttonStyles={{ primary: false, size: 'medium' }}
    buttonAlign="flex-start"
    titleStyles={{
      noPadding: true,
      fontSize: 'medium',
      textAlign: 'left',
      customStyles: { marginBottom: '50px' },
    }}
    contentSize="large"
  >
    Ac tincidunt massa laoreet eu, phasellus at adipiscing. Ornare ultricies
    aliquam, ultrices neque. Amet ac varius scelerisque orci.
  </TitleWithCTA>
);

export const SecondExampleInSite = () => (
  <TitleWithCTA
    backgroundColor={theme.skGreen}
    CTAText="Get started"
    buttonStyles={{
      primary: true,
      size: 'large',
      styles: { backgroundColor: theme.white, color: theme.skGreen },
    }}
    buttonAlign="center"
    titleStyles={{
      noPadding: true,
      fontSize: 'medium',
      textAlign: 'center',
      customStyles: { marginBottom: '50px' },
      mainColor: theme.lightGrey,
    }}
  >
    Unlock the power of 14,000+ retailers connected to Skupos
  </TitleWithCTA>
);
