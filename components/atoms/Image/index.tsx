import { ImageProps } from 'next/image';
import styled from 'styled-components';

import {
  color,
  height,
  width,
  maxWidth,
  ColorProps,
  HeightProps,
  WidthProps,
  MaxWidthProps,
  margin,
  MarginProps,
} from 'styled-system';

export interface ImpageProps
  extends ColorProps,
    HeightProps,
    WidthProps,
    MaxWidthProps,
    MarginProps {}

export const Img = styled.img<ImageProps>`
  ${color}
  ${height}
  ${width}
  ${maxWidth}
  ${margin}

  height:auto;
  ${height}
`;
