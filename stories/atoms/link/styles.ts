import styled, { css } from 'styled-components';
import { StyledLinkProps } from '.';
import { ThemeInterface } from '../../../styles/theme';

export const Link = styled.a<StyledLinkProps>`
  font-weight: 600;
  color: ${(props) =>
    props.color === 'dark'
      ? (props.theme as ThemeInterface).skBlack
      : (props.theme as ThemeInterface).lightGrey};

  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        color: ${(props) => (props.theme as ThemeInterface).skGreen};
        cursor: pointer;
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 1.5rem;
      line-height: 2rem;

      @media (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    `};

  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 14px;
    `}

  ${(props) =>
    props.styles &&
    css`
      ${props.styles};
    `}
`;
