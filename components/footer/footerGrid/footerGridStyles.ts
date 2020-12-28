import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const GridTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const GridItem = styled.a`
  font-size: 14px;
  color: ${(props) => (props.theme as ThemeInterface).lightGrey};

  &:hover {
    color: ${(props) => (props.theme as ThemeInterface).skGreen};
  }
`;
