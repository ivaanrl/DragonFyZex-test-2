import ImageDisplay from '../../components/imageDisplay/imageDisplay';
import { ImageDisplayInfo } from '../../shared/imageDisplay';
import {
  ImagesDisplayContainer,
  LoadMoreButton,
  LoadMoreButtonContainer,
} from './imagesDisplayStyles';

interface Props {
  imagesInfo: ImageDisplayInfo[];
  showLoadMore: boolean;
}

const ImagesDisplay = ({ imagesInfo, showLoadMore }: Props) => {
  return (
    <>
      <ImagesDisplayContainer>
        {imagesInfo.map(({ title, picture, category, subtitle }) => (
          <ImageDisplay
            title={title}
            picture={picture}
            category={category}
            subtitle={subtitle}
            key={picture}
          />
        ))}
      </ImagesDisplayContainer>
      {showLoadMore ? (
        <LoadMoreButtonContainer>
          <LoadMoreButton>Load more</LoadMoreButton>
        </LoadMoreButtonContainer>
      ) : null}
    </>
  );
};

export default ImagesDisplay;
