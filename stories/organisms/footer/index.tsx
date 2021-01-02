import React from 'react';
import { theme } from '../../../styles/theme';
import { FooterBottom, FooterBottomProps } from '../../molecules/footerBottom';
import { FooterGrid, FooterGridProps } from '../footerGrid';
import { FooterBottomContainer, StyledFooter } from './styles';

export interface StyledFooterProps {
  backgroundColor?: string;
}

export interface FooterProps extends StyledFooterProps {
  footerGridSectionProps: FooterGridProps;
  footerBottomProps: FooterBottomProps;
}

export const Footer: React.FC<FooterProps> = ({
  footerGridSectionProps,
  footerBottomProps,
  backgroundColor = theme.skBlack,
}) => {
  return (
    <StyledFooter backgroundColor={backgroundColor}>
      <FooterGrid {...footerGridSectionProps} />
      <FooterBottomContainer>
        <FooterBottom {...footerBottomProps} />
      </FooterBottomContainer>
    </StyledFooter>
  );
};
