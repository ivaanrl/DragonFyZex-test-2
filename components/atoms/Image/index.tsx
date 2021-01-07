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

export interface ImageProps
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
