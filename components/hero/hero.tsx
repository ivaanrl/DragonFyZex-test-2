import {
  MainContainer,
  HeroTitleContainer,
  HeroTitle,
  ImageContainer,
  NextImage,
  ImageDescriptionText,
  ImageDescriptionContainer,
  ImageDescriptionButton,
  ImageDescriptionButtonContainer,
} from './heroStyles';

const Hero = () => {
  return (
    <MainContainer>
      <HeroTitleContainer>
        <HeroTitle>
          Retailers and brands <span>transform </span>
          their sales and marketing strategies with Skupos. Have a closer look
          at how we’re helping them succeed.
        </HeroTitle>
      </HeroTitleContainer>
      <ImageContainer>
        <NextImage
          width={1801}
          height={933}
          src="/images/hero/firstImage.png"
          alt="placeholder image"
        />
      </ImageContainer>
      <ImageDescriptionContainer>
        <ImageDescriptionText>
          Ac tincidunt massa laoreet eu, phasellus at adipiscing. Ornare
          ultricies aliquam, ultrices neque. Amet ac varius scelerisque orci.
        </ImageDescriptionText>
        <ImageDescriptionButtonContainer>
          <ImageDescriptionButton>See how they did it</ImageDescriptionButton>
        </ImageDescriptionButtonContainer>
      </ImageDescriptionContainer>
    </MainContainer>
  );
};

export default Hero;
