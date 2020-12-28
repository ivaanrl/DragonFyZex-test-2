import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import Image from 'next/image';
import { SecondaryButton } from '../../styles/globalStyles';

export const MainContainer = styled.div``;

export const HeroTitleContainer = styled.div`
  background-color: ${(props) => (props.theme as ThemeInterface).yellow};
  display: flex;
  align-items: center;
  padding-bottom: 26rem;
  padding-top: 8rem;
  height: 95vh;

  @media (min-height: 800px) {
    height: 80vh;
  }

  @media (min-width: 640px) {
    height: 100vh;
    padding-top: 16rem;
  }
`;

export const HeroTitle = styled.h1`
  color: ${(props) => (props.theme as ThemeInterface).skBlack};
  text-align: center;
  font-weight: 600;
  max-width: 1100px;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;

  span {
    color: white;
  }

  font-size: 26px;
  line-height: 36px;

  @media (min-height: 800px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media (min-width: 640px) {
    padding-right: 8px;
    padding-left: 8px;
    line-height: 67px;
    font-size: 62px;
  }
`;

export const ImageContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -6rem;

  @media (min-width: 640px) {
    margin-top: -11rem;
    max-width: 70%;
  }
`;

export const NextImage = styled(Image)`
  z-index: 1;
  display: block;
  margin: auto;
  width: 90%;
  max-width: 1400px;
  height: auto;
`;

export const ImageDescriptionContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (min-width: 640px) {
    margin-bottom: 200px;
  }
`;

export const ImageDescriptionText = styled.h1`
  text-align: left;
  font-weight: 600;
  margin-bottom: 50px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 26px;
  line-height: 34px;

  @media (min-width: 640px) {
    font-size: 42px;
    line-height: 54px;
  }
`;

export const ImageDescriptionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;

  @media (min-width: 640px) {
    justify-content: flex-start;
  }
`;

export const ImageDescriptionButton = styled(SecondaryButton)`
  width: 100%;
  height: 4rem;
  padding-right: 40px;
  padding-left: 40px;
  border: 1px solid ${(props) => (props.theme as ThemeInterface).borderGrey};

  @media (min-width: 640px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
