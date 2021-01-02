import React from 'react';
import { StyledMobileNavigation } from './styles';

export interface StyledMobileNavigationProps {}

export interface MobileNavigationProps extends StyledMobileNavigationProps {
  children: React.ReactNode;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  children,
}) => {
  return <StyledMobileNavigation>{children}</StyledMobileNavigation>;
};
