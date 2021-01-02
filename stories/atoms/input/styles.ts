import styled, { css } from 'styled-components';
import { StyledInputProps } from '.';
import { ThemeInterface } from '../../../styles/theme';

export const StyledInput = styled.input<StyledInputProps>`
  border: none;
  border-radius: 9999px;
  padding-left: 20px;
  width: 100%;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.color === 'dark' &&
    css`
      background-color: ${(props) => (props.theme as ThemeInterface).skBlack};
      color: ${(props) => (props.theme as ThemeInterface).lightGrey};
    `}

  ${(props) =>
    props.color === 'light' &&
    css`
      background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
      color: ${(props) => (props.theme as ThemeInterface).skBlack};
    `}

  ${(props) =>
    props.inputSize === 'large' &&
    css`
      font-size: 15px;

      @media (min-width: 640px) {
        font-size: 18px;
      }
    `}
`;
