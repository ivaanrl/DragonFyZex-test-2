import React from 'react';
import { StyledImage, StyledImageContainer } from './styles';

export interface StyledImageContainerProps {
  matchImageSize?: boolean;
  imgWidth: number;
  imgHeight: number;
  size?: 'extra-large' | 'medium';
}

export interface ImageContainerProps extends StyledImageContainerProps {
  src: string;
  alt: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  imgWidth,
  imgHeight,
  src,
  alt,
  matchImageSize,
  size = 'medium',
}) => {
  return (
    <StyledImageContainer
      matchImageSize={matchImageSize}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      size={size}
    >
      <StyledImage width={imgWidth} height={imgHeight} src={src} alt={alt} />
    </StyledImageContainer>
  );
};
