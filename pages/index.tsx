import Head from 'next/head';
import { imageSet1, imageSet2 } from '../shared/imageDisplay';
import React from 'react';
import { theme } from '../styles/theme';
import PageTemplate from '../components/templates/index';
import { Hero } from '../components/organisms/hero';
import { Button, H2 } from '../components/atoms';
import { TitleWithCTA } from '../components/organisms/titleWithCTA';
import { InputCTA } from '../components/molecules';
import { Announcements } from '../components/organisms/announcements';
import { Divider } from '../components/atoms/Divider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skupos</title>
      </Head>
      <PageTemplate>
        <Hero
          imageAlt="placeholder image"
          imageSrc="/images/hero/firstImage.png"
          title={
            <>
              Retailers and brands <span>transform</span>
              their sales and marketing strategies with Skupos. Have a closer
              look at how we’re helping them succeed.
            </>
          }
        />
        <TitleWithCTA
          backgroundColor={theme.colors.white}
          title={
            <H2
              fontSize={[26, 32, 42]}
              fontWeight={600}
              maxWidth={900}
              textAlign="left"
              marginBottom={50}
            >
              Ac tincidunt massa laoreet eu, phasellus at adipiscing. Ornare
              ultricies aliquam, ultrices neque. Amet ac varius scelerisque
              orci.
            </H2>
          }
          cta={
            <Button
              borderRadius={9999}
              color={theme.colors.skBlack}
              border={'1px solid'}
              borderColor={theme.colors.borderGrey}
              hoverBorderColor={theme.colors.skBlack}
              backgroundColor={theme.colors.white}
              fontWeight={600}
              fontSize={18}
              height="4rem"
              width={['100%', 'auto']}
              paddingLeft={70}
              paddingRight={70}
              alignSelf={'flex-start'}
            >
              See how they did it
            </Button>
          }
        />
        <Divider height={80} />
        <Announcements announcementsInfo={imageSet1} />
        <Divider height={120} />
        <TitleWithCTA
          backgroundColor={theme.colors.yellow}
          title={
            <H2
              fontSize={[32, 48]}
              fontWeight={600}
              maxWidth={900}
              textAlign="center"
              marginBottom={50}
            >
              Skupos is sweeping the c-store nation. Send the latest stories to
              your inbox.
            </H2>
          }
          cta={<InputCTA placeholder="Enter email address" cta="Subscribe" />}
        />
        <Divider height={120} />
        <Announcements announcementsInfo={imageSet2}>
          <Button
            borderRadius={9999}
            color={theme.colors.lightGrey}
            backgroundColor={theme.colors.skBlack}
            fontWeight={600}
            fontSize={18}
            height="4rem"
            paddingLeft={34}
            paddingRight={34}
            margin="auto"
            marginTop={80}
          >
            Load more
          </Button>
        </Announcements>
        <Divider height={100} />
        <TitleWithCTA
          backgroundColor={theme.colors.lightGrey}
          title={
            <H2
              fontSize={[32, 44, 48]}
              fontWeight={600}
              maxWidth={900}
              textAlign="center"
              marginBottom={50}
            >
              Never miss a captivating success story. Send the latest stories to
              your inbox.
            </H2>
          }
          cta={<InputCTA placeholder="Enter email address" cta="Subscribe" />}
        />
        <TitleWithCTA
          backgroundColor={theme.colors.skGreen}
          title={
            <H2
              fontSize={[32, 44, 48]}
              fontWeight={600}
              maxWidth={900}
              textAlign="center"
              color={theme.colors.lightGrey}
              marginBottom={50}
            >
              Unlock the power of 14,000+ retailers connected to Skupos
            </H2>
          }
          cta={
            <Button
              borderRadius={9999}
              color={theme.colors.skGreen}
              backgroundColor={theme.colors.lightGrey}
              fontWeight={600}
              fontSize={18}
              height="4rem"
              paddingLeft={34}
              paddingRight={34}
              hoverBackgroundColor={theme.colors.skBlack}
            >
              Get started
            </Button>
          }
        />
      </PageTemplate>
    </>
  );
}
