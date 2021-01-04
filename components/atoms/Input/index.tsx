import styled from 'styled-components';
import {
  border,
  BorderProps,
  borderColor,
  BorderColorProps,
  color,
  ColorProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
  width,
  WidthProps,
  padding,
  PaddingProps,
} from 'styled-system';

export interface InputProps
  extends BorderProps,
    BorderColorProps,
    ColorProps,
    FontFamilyProps,
    FontSizeProps,
    HeightProps,
    WidthProps,
    PaddingProps {
  placeholder?: string;
  placeholderColor?: string;
}

export const Input = styled.input<InputProps>`
      
      ${border}
      ${borderColor}
      
      ${color}

      ${fontFamily}
      ${fontSize}

      ${height}
      ${width}

      ${padding}

      &:focus{
        outline:none;
      }
    `;
