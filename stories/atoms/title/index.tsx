import React from 'react';
import { theme } from '../../../styles/theme';
import { Title as StyledTitle } from './styles';

export interface StyledTitleProps {
  fontSize?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  mainColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  noPadding?: boolean;
  highlightColor?: string;
  customFontSize?: number;
  customFontWeight?: string;
  customStyles?: any;
}

export interface TitleProps extends StyledTitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<
  TitleProps &
    React.DetailedHTMLProps<
      React.HTMLProps<HTMLParagraphElement>,
      HTMLParagraphElement
    >
> = ({
  fontSize = 'medium',
  mainColor = theme.skBlack,
  highlightColor = theme.lightGrey,
  textAlign = 'center',
  noPadding = false,
  customFontSize,
  customFontWeight,
  children,
  customStyles,
}) => {
  return (
    <StyledTitle
      fontSize={fontSize}
      mainColor={mainColor}
      highlightColor={highlightColor}
      textAlign={textAlign}
      customFontSize={customFontSize}
      customFontWeight={customFontWeight}
      noPadding={noPadding}
      customStyles={customStyles}
    >
      {children}
    </StyledTitle>
  );
};
