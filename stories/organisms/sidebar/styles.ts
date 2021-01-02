import styled, { css } from 'styled-components';
import { StyledSidebarProps } from '.';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../../styles/theme';

export const StyledSidebar = styled(motion.div)<StyledSidebarProps>`
  width: min-content;
  padding-right: 34px;
  padding-left: 34px;
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
  z-index: 200;
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles};
    `}
`;
