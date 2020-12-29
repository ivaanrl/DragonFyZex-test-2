import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../styles/theme';

export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  overflow: scroll;
  padding-top: 64px;
  min-height: 100vh;
  z-index: 10;
`;

export const MobileOptionsContainer = styled.div`
  padding-right: 34px;
  padding-left: 34px;
  display: flex;
  flex-direction: column;
`;
