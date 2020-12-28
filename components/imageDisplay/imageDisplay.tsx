import { ImageDisplayInfo } from '../../shared/imageDisplay';
import {
  Category,
  ImageDisplayContainer,
  NextImage,
  Subtitle,
  Title,
  ImageContainer,
} from './imageDisplayStyles';

interface Props extends ImageDisplayInfo {}

const ImageDisplay = ({ category, title, subtitle, picture }: Props) => {
  return (
    <ImageDisplayContainer>
      <ImageContainer>
        <NextImage width={541} height={371} src={picture} alt={`${title}`} />
      </ImageContainer>
      <Category retail={category === 'RETAIL'}>{category}</Category>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ImageDisplayContainer>
  );
};

export default ImageDisplay;
