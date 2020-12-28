import styled, { css } from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const ImageDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div<{ retail: boolean }>`
  font-size: 14px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;

  color: ${(props) =>
    props.retail
      ? (props.theme as ThemeInterface).orange
      : (props.theme as ThemeInterface).berry};
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
  line-height: 31px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  line-height: 26px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const NextImage = styled.img`
  max-width: 100%;
  height: auto;
`;
