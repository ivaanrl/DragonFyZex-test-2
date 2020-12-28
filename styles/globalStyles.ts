import styled from 'styled-components';
import { ThemeInterface } from './theme';

export const Button = styled.button`
  font-family: 'Open Sans';
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => (props.theme as ThemeInterface).skGreen};
  color:${(props) => (props.theme as ThemeInterface).white};

  &:hover{
    background-color ${(props) => (props.theme as ThemeInterface).skBlack};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => (props.theme as ThemeInterface).lightGrey};

  &:hover {
    border: 1px solid ${(props) => (props.theme as ThemeInterface).skBlack};
  }
`;

export const NavbarLink = styled.a`
  margin-right: 48px;
  font-weight: 600;
  &:hover {
    color: ${(props) => (props.theme as ThemeInterface).skGreen};
    cursor: pointer;
  }
`;

export const NavbarSectionLink = styled(NavbarLink)`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding-left: 0;

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
