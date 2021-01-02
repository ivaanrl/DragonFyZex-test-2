import styled, { css } from 'styled-components';
import { StyledTitleProps } from '.';
import { ThemeInterface } from '../../../styles/theme';

export const Title = styled.p<StyledTitleProps>`
  text-align: center;
  font-weight: 600;
  max-width: 1100px;
  padding-right: 20px;
  padding-left: 20px;

  span {
    color: ${(props) => props.highlightColor};
  }

  text-align: ${(props) => props.textAlign};

  color: ${(props) => props.mainColor};

  ${(props) =>
    props.fontSize === 'extra-large' &&
    css`
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
    `}

    ${(props) =>
      props.fontSize === 'large' &&
      css`
        font-size: 36px;
        line-height: 44px;

        @media (min-width: 1024px) {
          font-size: 48px;
          line-height: 54px;
        }
      `}

    ${(props) =>
      props.fontSize === 'medium' &&
      css`
        font-size: 26px;
        line-height: 34px;

        @media (min-width: 640px) {
          font-size: 42px;
          line-height: 54px;
        }
      `}

    ${(props) =>
      props.fontSize === 'small' &&
      css`
        font-size: 26px;
        line-height: 31px;
      `}

    ${(props) =>
      props.fontSize === 'extra-small' &&
      css`
        font-size: 12px;
      `};

    ${(props) =>
      props.customFontSize &&
      css`
        font-size: ${props.customFontSize}px;
      `}
      
    ${(props) =>
      props.customFontWeight &&
      css`
        font-weight: ${props.customFontWeight};
      `}

    ${(props) =>
      props.noPadding &&
      css`
        padding: 0;
      `}


    ${(props) =>
      props.customStyles &&
      css`
        ${props.customStyles};
      `}
`;
