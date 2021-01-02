import styled, { css } from 'styled-components';
import { ScreenSizes, ThemeInterface } from '../../../styles/theme';
import { StyledButtonProps } from './index';

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Open Sans';
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 16px;
  border: none;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => (props.theme as ThemeInterface).skGreen};
      color: ${(props) => (props.theme as ThemeInterface).white};

      &:hover {
        background-color: ${(props) => (props.theme as ThemeInterface).skBlack};
      }
    `}

  ${(props) =>
    !props.primary &&
    css`
      background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
      border: 1px solid ${(props) => (props.theme as ThemeInterface).borderGrey};

      &:hover {
        border: 1px solid ${(props) => (props.theme as ThemeInterface).skBlack};
      }
    `}

    ${(props) =>
      props.size === 'large' &&
      css`
        height: 4rem;
        height: 4rem;
        padding-right: 40px;
        padding-left: 40px;
      `}

    ${(props) =>
      props.size === 'medium' &&
      css`
        height: 3rem;
        padding-left: 34px;
        padding-right: 34px;
      `}

    ${(props) =>
      props.size === 'small' &&
      css`
        height: 2rem;
        padding-left: 20px;
        padding-right: 20px;
      `}

  ${(props) =>
    props.noBorder &&
    css`
      border: 1px solid transparent;

      &:hover {
        border: 1px solid transparent;
        color: ${(props) => (props.theme as ThemeInterface).skGreen};
      }
    `}

  ${(props) =>
    props.square &&
    css`
      border: 1px solid
        ${(props) => (props.theme as ThemeInterface).lightGreyTransparent};
      border-radius: 4px;
    `}

  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
    `}

   ${(props) =>
     props.borderColor &&
     css`
       border: 1px solid ${props.borderColor};
     `}

    ${(props) =>
      props.hasIcon &&
      css`
        padding-left: 20px;
        padding-right: 40px;
        position: relative;
      `}

    ${(props) =>
      props.fullRounded &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
      `}

    ${(props) =>
      props.fullRounded &&
      props.size === 'small' &&
      css`
        padding: 0.5rem;
        width: 2.25rem;
        height: 2.25rem;
      `}

    ${(props) =>
      props.borederHoverColor &&
      css`
        &:hover {
          border: 1px solid ${props.borederHoverColor};
        }
      `}

      ${(props) =>
        props.fullWidth === 'sm' &&
        css`
          width: 100%;

          @media (min-width: ${ScreenSizes.sm}px) {
            width: auto;
          }
        `}
      
      ${(props) =>
        props.fullWidth === 'lg' &&
        css`
          width: 100%;

          @media (min-width: ${ScreenSizes.lg}px) {
            width: auto;
          }
        `}

     ${(props) =>
       props.fullWidth === 'all' &&
       css`
         width: 100%;
       `}

    ${(props) =>
      props.styles &&
      css`
        ${props.styles};
      `}
`;
