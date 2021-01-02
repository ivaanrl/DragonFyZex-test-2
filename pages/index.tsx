import Head from 'next/head';
import Hero from '../components/hero/hero';
import ImagesDisplay from '../containers/imagesDisplay/imagesDisplay';
import { imageSet1, imageSet2 } from '../shared/imageDisplay';
import Subscribe from '../components/subscribe/subscribe';
import GetStarted from '../components/getStarted/getStarted';
import React from 'react';
import { TitleWithCTA } from '../stories/organisms/titleWithCTA';
import { theme } from '../styles/theme';
import { TitleWithCTAInput } from '../stories/organisms/titleWithCTAInput';
import { Title } from '../stories/atoms/title';
import { Announcements } from '../stories/organisms/announcements';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skupos</title>
      </Head>
      <Hero />
      <TitleWithCTA
        CTAText="See how they did it"
        buttonStyles={{
          primary: false,
          size: 'large',
          transparent: true,
          fullWidth: 'sm',
        }}
        buttonAlign="flex-start"
        titleStyles={{
          noPadding: true,
          fontSize: 'medium',
          textAlign: 'left',
          customStyles: { marginBottom: '50px' },
        }}
        contentSize="large"
        backgroundColor={theme.white}
      >
        Ac tincidunt massa laoreet eu, phasellus at adipiscing. Ornare ultricies
        aliquam, ultrices neque. Amet ac varius scelerisque orci.
      </TitleWithCTA>
      <Announcements
        announcements={imageSet1}
        marginTop={50}
        marginBottom={120}
      />
      <TitleWithCTAInput
        CTAText="Subscribe"
        PlaceholderText="Enter email address"
        backgroundColor={theme.yellow}
      >
        Skupos is sweeping the c-store nation. Send the latest stories to your
        inbox.
      </TitleWithCTAInput>
      <Announcements
        announcements={imageSet2}
        marginTop={100}
        marginBottom={100}
        canLoadMore
      />
      <TitleWithCTAInput
        CTAText="Subscribe"
        PlaceholderText="Enter email address"
        backgroundColor={theme.lightGrey}
      >
        Never miss a captivating success story. Send the latest stories to your
        inbox.
      </TitleWithCTAInput>
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
          fontSize: 'large',
          textAlign: 'center',
          customStyles: { marginBottom: '50px' },
          mainColor: theme.lightGrey,
        }}
      >
        Unlock the power of 14,000+ retailers connected to Skupos
      </TitleWithCTA>
    </>
  );
}
