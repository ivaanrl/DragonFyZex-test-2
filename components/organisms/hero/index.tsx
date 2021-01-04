import { FC, ReactNode } from 'react';
import { theme } from '../../../styles/theme';
import { H1, Img } from '../../atoms';
import { ImageWrapper, HeroWrapper } from './styles';

export interface HeroProps {
  title: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const Hero: FC<HeroProps> = ({ title, imageSrc, imageAlt }) => {
  return (
    <>
      <HeroWrapper>
        <H1
          highlightColor={theme.colors.white}
          color={theme.colors.skBlack}
          maxWidth={1100}
          lineHeight={['2.5rem', '4.2rem']}
          textAlign="center"
          fontWeight={600}
          fontSize={[32, 48, 62]}
          margin={0}
        >
          {title}
        </H1>
      </HeroWrapper>
      <ImageWrapper>
        <Img src={imageSrc} alt={imageAlt} width={'100%'} height="auto" />
      </ImageWrapper>
    </>
  );
};
