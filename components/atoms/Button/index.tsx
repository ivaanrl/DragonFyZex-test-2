import styled from 'styled-components';
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  justifySelf,
  JustifySelfProps,
  lineHeight,
  margin,
  MarginProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
  position,
  PositionProps,
} from 'styled-system';

export interface ButtonProps
  extends BorderProps,
    ColorProps,
    FontFamilyProps,
    FontWeightProps,
    FontSizeProps,
    PaddingProps,
    BorderRadiusProps,
    WidthProps,
    MaxWidthProps,
    HeightProps,
    MaxHeightProps,
    MarginProps,
    AlignSelfProps,
    JustifySelfProps,
    PositionProps {
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
}

export const Button = styled.button<ButtonProps>`
  border:none;
  &:focus{
    outline:none;
  }
  font-family:'Open Sans';

  ${color}

  ${alignSelf}
  ${justifySelf}
  
  ${border}
  ${borderRadius}
  
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}
  ${fontSize}
  
  ${height}
  ${width}
  ${maxWidth}
  ${maxHeight}

  ${padding}
  ${margin}
  ${position}

  display:flex;
  justify-content:center;
  align-items:center;

  &:hover{
    cursor:pointer;
    background-color: ${(props) => props.hoverBackgroundColor};
    color:${(props) => props.hoverColor};
    border-color: ${(props) => props.hoverBorderColor};
  }
  
`;
