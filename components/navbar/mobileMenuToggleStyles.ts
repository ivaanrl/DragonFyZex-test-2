import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const Button = styled.button<{ isOpen: boolean }>`
  font-family: 'Open Sans';
  border: 1px solid ${(props) => (props.theme as ThemeInterface).borderGreyDark};
  border-radius: 9999px;
  padding: 0.5rem;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isOpen ? (props.theme as ThemeInterface).skGreen : 'transparent'};

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const PathWhite = styled.path`
  fill: white;
`;

export const PathGrey = styled.path`
  stroke: ${(props) => (props.theme as ThemeInterface).borderGreyDark};
`;
