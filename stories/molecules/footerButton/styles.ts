import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeInterface } from '../../../styles/theme';

export const IconSvg = styled(motion.svg)`
  position: absolute;
  right: 20px;
`;

export const IconPath = styled.path<{ fillColor: string }>`
  fill: ${(props) => props.fillColor};
`;
