import styled, { css } from 'styled-components';
import {
  alignItems,
  alignSelf,
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  margin,
  textAlign,
  maxWidth,
  overflow,
  width,
  AlignItemsProps,
  AlignSelfProps,
  ColorProps,
  DisplayProps,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MarginProps,
  TextAlignProps,
  MaxWidthProps,
  OverflowProps,
  WidthProps,
} from 'styled-system';

export interface HeadingProps
  extends AlignItemsProps,
    AlignSelfProps,
    ColorProps,
    DisplayProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    MarginProps,
    TextAlignProps,
    MaxWidthProps,
    OverflowProps,
    WidthProps {
  highlightColor?: string;
}

const headingStyles = css`
  ${alignItems};
  ${alignSelf};

  ${display};
  ${color};

  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};

  ${textAlign};

  ${margin};

  ${overflow};

  ${maxWidth};
  ${width};
`;

export const H1 = styled.h1<HeadingProps>`
  ${headingStyles};

  span {
    color: ${(props) => props.highlightColor};
  }
  line-height: 2.5rem;

  @media (min-width: 640px) {
    line-height: 4.2rem;
  }
`;

export const H2 = styled.h2<HeadingProps>`
  ${headingStyles};

  span {
    color: ${(props) => props.highlightColor};
  }
`;

export const H3 = styled.h3<HeadingProps>`
  ${headingStyles};

  span {
    color: ${(props) => props.highlightColor};
  }
`;

export const H4 = styled.h4<HeadingProps>`
  ${headingStyles};

  span {
    color: ${(props) => props.highlightColor};
  }
`;

export const H5 = styled.h5<HeadingProps>`
  ${headingStyles};

  span {
    color: ${(props) => props.highlightColor};
  }
`;

export const H6 = styled.h6<HeadingProps>`
  ${headingStyles};

  span {
    color: ${(props) => props.highlightColor};
  }
`;

export interface ParagraphProps
  extends AlignItemsProps,
    AlignSelfProps,
    ColorProps,
    DisplayProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    MarginProps,
    TextAlignProps,
    MaxWidthProps,
    OverflowProps,
    WidthProps {}

export const P = styled.p<ParagraphProps>`
  ${alignItems};
  ${alignSelf};

  ${display};
  ${color};

  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};

  ${textAlign};

  margin: 0;
  ${margin};

  ${overflow};

  ${maxWidth};
  ${width};
`;
