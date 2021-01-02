import React from 'react';
import { theme } from '../../../styles/theme';
import { StyledText } from './styles';

export interface StyledTextProps {
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
  fontWeight?: string;
  color?: string;
  style?: any;
}

export interface TextProps extends StyledTextProps {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = 'medium',
  align = 'left',
  fontWeight = 'normal',
  color = theme.skBlack,
  style,
  children,
}) => {
  return (
    <StyledText
      size={size}
      align={align}
      fontWeight={fontWeight}
      style={style}
      color={color}
    >
      {children}
    </StyledText>
  );
};
