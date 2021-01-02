import React from 'react';
import { StyledButton } from './styles';

export interface StyledButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: 'all' | 'lg' | 'sm';
  noBorder?: boolean;
  transparent?: boolean;
  square?: boolean;
  hasIcon?: boolean;
  borderColor?: string;
  borederHoverColor?: string;
  fullRounded?: boolean;
  onClick?: () => void;
  styles?: {};
}

export interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  primary = false,
  size = 'medium',
  noBorder = false,
  transparent = false,
  square = false,
  hasIcon = false,
  fullRounded = false,
  fullWidth,
  borederHoverColor,
  styles,
  borderColor,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      primary={primary}
      size={size}
      noBorder={noBorder}
      transparent={transparent}
      square={square}
      hasIcon={hasIcon}
      borderColor={borderColor}
      fullRounded={fullRounded}
      borederHoverColor={borederHoverColor}
      fullWidth={fullWidth}
      styles={styles}
    >
      {children}
    </StyledButton>
  );
};
