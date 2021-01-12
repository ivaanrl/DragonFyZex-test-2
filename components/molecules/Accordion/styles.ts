import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../../styles/theme';

export const AccordionButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  font-family: 'Open Sans';
  background-color: ${(props) =>
    (props.theme as ThemeInterface).colors.lightGrey};
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const AccordionSection = styled(motion.section)`
  max-width: none;
  padding: 0;
  margin-top: 20px;
  margin-right: 34px;
`;
