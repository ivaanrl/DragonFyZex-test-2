import styled, { css } from 'styled-components';
import { StyledModalProps } from '.';
import { motion } from 'framer-motion';

export const StyledModal = styled(motion.div)<StyledModalProps>`
  background-color: ${(props) => props.color};
  z-index: ${(props) => props.zIndex};

  ${(props) =>
    props.fullScreen &&
    css`
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    `}

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles};
    `}
`;
