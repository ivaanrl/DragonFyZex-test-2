import { ImageContainer, NextImage } from './heroStyles';
import Image from 'next/image';
const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <Image
        width={1801}
        height={933}
        src="/images/hero/firstImage.png"
        alt="placeholder image"
        className="hero-image"
      />
    </div>
  );
};

export default HeroImage;
