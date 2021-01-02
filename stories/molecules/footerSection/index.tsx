import React from 'react';
import { theme } from '../../../styles/theme';
import { Link } from '../../atoms/link';
import { Title } from '../../atoms/title';
import { StyledFooterSection } from './styled';

export interface StyledFooterSectionProps {}

export interface FooterSectionProps extends StyledFooterSectionProps {
  title: string;
  items: { label: string; href: string }[];
  titleColor?: string;
  itemsColor?: 'light' | 'dark';
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  titleColor = theme.lightGrey,
  itemsColor = 'light',
}) => {
  return (
    <StyledFooterSection>
      <Title
        fontSize="extra-small"
        textAlign="left"
        noPadding
        mainColor={titleColor}
      >
        {title}
      </Title>
      {items.map(({ label, href }) => (
        <Link size="small" color={itemsColor} styles={{ fontWeight: 'normal' }}>
          {label}
        </Link>
      ))}
    </StyledFooterSection>
  );
};
