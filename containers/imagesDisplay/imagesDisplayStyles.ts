import styled from 'styled-components';
import { PrimaryButton } from '../../styles/globalStyles';
import { ThemeInterface } from '../../styles/theme';

export const ImagesDisplayContainer = styled.div`
  max-width: 1460px;
  margin: auto;
  display: grid;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  padding-right: 30px;
  padding-left: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  margin-top: 100px;
`;

export const LoadMoreButton = styled(PrimaryButton)`
  background-color: ${(props) => (props.theme as ThemeInterface).skBlack};
  height: 4rem;
  padding-left: 44px;
  padding-right: 44px;
`;

export const LoadMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 150px;
`;
