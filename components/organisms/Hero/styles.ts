import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const HeroWrapper = styled.div`
  background-color: ${(props) => (props.theme as ThemeInterface).colors.yellow};
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100vw;
  padding-top: 2rem;
  height: 85vh;
  min-height: 600px;

  @media (min-height: 730px) {
    padding-top: 8rem;
    height: 100vh;
  }

  @media (min-width: 1024px) {
    height: 100vh;
    padding-top: 13rem;
  }
`;

export const ImageWrapper = styled.div`
  margin: auto;
  width: 90%;
  margin-top: -7rem;

  @media (min-width: 1024px) {
    max-width: 1400px;
    margin-top: -11rem;
  }
`;
