import React from 'react';
import { Link as StyledLink } from './styles';

export interface StyledLinkProps {
  color?: 'dark' | 'light';
  size?: 'small' | 'medium' | 'large';
  hoverable?: boolean;
  styles?: {};
}

export interface LinkProps extends StyledLinkProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  onHover?: () => void;
}

export const Link: React.FC<LinkProps> = (
  {
    color = 'dark',
    size = 'medium',
    hoverable = true,
    children,
    href = '#',
    onClick,
    onHover,
    styles,
  },
  ...rest
) => {
  return (
    <StyledLink
      href={href}
      hoverable={hoverable}
      color={color}
      size={size}
      onClick={onClick}
      onMouseEnter={onHover}
      {...rest}
      styles={styles}
    >
      {children}
    </StyledLink>
  );
};
