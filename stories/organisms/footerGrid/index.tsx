import React from 'react';
import { FooterSection } from '../../molecules/footerSection';
import { LogoAnd2FooterButton } from '../logoAnd2FooterButtons';
import { FirstGridColumn, StyledFooterGrid } from './styles';

export interface StyledFooterGridProps {}

export interface FooterGridProps extends StyledFooterGridProps {
  footerSectionProps: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
}

export const FooterGrid: React.FC<FooterGridProps> = ({
  footerSectionProps,
}) => {
  return (
    <StyledFooterGrid>
      <FirstGridColumn>
        <LogoAnd2FooterButton />
      </FirstGridColumn>
      {footerSectionProps.map((footerSection) => (
        <FooterSection {...footerSection} />
      ))}
    </StyledFooterGrid>
  );
};
