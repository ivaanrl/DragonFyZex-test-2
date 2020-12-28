import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  z-index: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 34px;
  padding-left: 34px;
  height: 4rem;
  border-bottom: 1px solid;
  border-color: ${(props) => (props.theme as ThemeInterface).borderGrey};
  background-color: ${(props) => (props.theme as ThemeInterface).yellow};

  @media (min-width: 1024px) {
    height: 96px;
  }
`;

export const NavbarHiddenOnLG = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex: 1 1 0%;
  }
`;

export const LogoImg = styled.img`
  height: 1.75rem;
  width: auto;
`;
