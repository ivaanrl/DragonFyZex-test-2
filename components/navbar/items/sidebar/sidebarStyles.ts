import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../../../styles/theme';

export const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  height: 100%;
  z-index: 10;
`;

export const SidebarContainer = styled(motion.div)`
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  width: max-content;
  overflow: hidden;
  padding-left: 34px;
  z-index: 20;
`;

export const SidebarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 96px;
`;
