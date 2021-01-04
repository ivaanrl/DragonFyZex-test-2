import styled from 'styled-components';
import {
  height,
  HeightProps,
  width,
  WidthProps,
  color,
  ColorProps,
} from 'styled-system';

export interface DividerProps extends HeightProps, WidthProps, ColorProps {}

export const Divider = styled.div<DividerProps>`
  min-width:'100%';
  ${height}
  ${width}
  ${color}
`;
