import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { NavbarProps } from '.';
import { ScreenSizes, ThemeInterface } from '../../../styles/theme';

export const StyledNavbar = styled.div<NavbarProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-right: 34px;
  padding-left: 34px;
  height: 4rem;
  border-bottom: 1px solid;
  border-color: ${(props) => props.borderColor};

  background-color: ${(props) => props.backgroundColor};

  @media (min-width: ${ScreenSizes.lg}px) {
    height: 96px;
  }
`;

export const FullWidthLG = styled.div`
  flex: 1 1 0%;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const MdAndDown = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const LoggedOutContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const MobileNavigationContainer = styled(motion.div)`
  position: absolute;
  padding-top: 10px;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 30px;
  z-index: 20;
  overflow-y: auto;
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
`;
