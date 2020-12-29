import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../../../styles/theme';

export const Modal = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  min-height: 100vh;
  z-index: 10;
`;

export const SidebarContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  width: max-content;
  overflow: hidden;
  padding-left: 34px;
  min-height: 100vh;
  z-index: 10;
`;

export const SidebarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 96px;
`;
