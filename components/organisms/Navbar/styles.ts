import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 34px;
  padding-right: 34px;
  background-color: ${(props) => (props.theme as ThemeInterface).colors.yellow};
  border: 1px solid
    ${(props) => (props.theme as ThemeInterface).colors.borderGreyLight};

  height: 4rem;

  @media (min-width: 1024px) {
    height: 96px;
  }
`;

export const LGandUpWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const SidebarWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const ModalWraper = styled(motion.div)``;

export const MobileNavWrapper = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: 0;
  bottom: 0;
  right: 0;
  padding-bottom: 20px;
  overflow-y: auto;

  background-color: ${(props) =>
    (props.theme as ThemeInterface).colors.lightGrey};
`;

export const LogoWrapper = styled.div`
  height: 28px;
`;
