import { ImageContainer, NextImage } from './heroStyles';

const HeroImage = () => {
  return (
    <ImageContainer>
      <NextImage
        width={1801}
        height={933}
        src="/images/hero/firstImage.png"
        alt="placeholder image"
      />
    </ImageContainer>
  );
};

export default HeroImage;
