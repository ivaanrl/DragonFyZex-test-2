import styled from 'styled-components';

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  ColorProps,
  margin,
  MarginProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
} from 'styled-system';

export interface LinkProps
  extends ColorProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    MarginProps {
  hoverColor?: string;
}

export const Link = styled.a<LinkProps>`
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}

  ${margin}

  text-decoration:none;

  &:hover{
    cursor:pointer;
    color: ${(props) => props.hoverColor};
  }
  
`;
