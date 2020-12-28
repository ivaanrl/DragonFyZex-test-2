import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../../../../styles/theme';

export const AccordionButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 34px;
  width: 100%;
  border: none;
  font-family: 'Open Sans';
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
