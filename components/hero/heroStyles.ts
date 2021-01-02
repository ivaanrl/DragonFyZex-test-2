import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import Image from 'next/image';
import { SecondaryButton } from '../../styles/globalStyles';

export const MainContainer = styled.div`
  overflow: hidden;
`;

export const HeroTitleContainer = styled.div`
  background-color: ${(props) => (props.theme as ThemeInterface).yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
  padding-bottom: 18rem;
  height: 80vh;

  @media (min-height: 800px) {
    height: 80vh;
  }

  @media (min-width: 640px) {
    height: 100vh;
    padding-top: 16rem;
    padding-bottom: 26rem;
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
