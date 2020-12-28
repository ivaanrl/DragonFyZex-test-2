import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AccordionButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 34px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;