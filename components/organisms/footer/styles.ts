import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${(props) =>
    (props.theme as ThemeInterface).colors.skBlack};

  min-height: 50vh;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-top: 80px;
`;

export const GridWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr repeat(4, 1fr);
  }
`;

export const FirstColumn = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const Svg = styled(motion.svg)`
  margin-left: 20px;
`;
