import {
  MainContainer,
  HeroTitleContainer,
  ImageContainer as ImgContainer,
} from './heroStyles';
import { Title } from '../../stories/atoms/title/styles';
import { theme } from '../../styles/theme';
import React from 'react';
import { ImageContainer } from '../../stories/atoms/imageContainer';

const Hero = () => {
  return (
    <MainContainer>
      <HeroTitleContainer>
        <Title fontSize="extra-large" highlightColor={theme.white}>
          Retailers and brands <span>transform </span>
          their sales and marketing strategies with Skupos. Have a closer look
          at how we’re helping them succeed.
        </Title>
      </HeroTitleContainer>
      <ImgContainer>
        <ImageContainer
          imgWidth={1801}
          imgHeight={933}
          src="/images/hero/firstImage.png"
          alt="placeholder image"
        />
      </ImgContainer>
    </MainContainer>
  );
};

export default Hero;
