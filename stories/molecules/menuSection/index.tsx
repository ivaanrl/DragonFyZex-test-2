import React from 'react';
import { theme } from '../../../styles/theme';
import { Title } from '../../atoms/title';
import { MenuLink, MenuLinkProps } from '../menuLink';
import { LinkContainer, MainLinkContainer, StyledMenuSection } from './styles';

export interface StyledMenuSectionProps {
  styles?: {};
}

export interface MenuSectionProps extends StyledMenuSectionProps {
  title: string;
  items: MenuLinkProps[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  title,
  styles,
}) => {
  return (
    <StyledMenuSection styles={styles}>
      <Title
        fontSize="extra-small"
        textAlign="left"
        customFontSize={14}
        mainColor={theme.skGreen}
        noPadding
        customStyles={{
          marginTop: '20px',
        }}
      >
        {title}
      </Title>
      {items.map(({ title, subtitle, customIcon, iconFillColor }, index) =>
        index === 0 ? (
          <MainLinkContainer>
            <MenuLink
              title={title}
              subtitle={subtitle}
              customIcon={customIcon}
              iconFillColor={iconFillColor}
            />
          </MainLinkContainer>
        ) : (
          <LinkContainer>
            <MenuLink
              title={title}
              subtitle={subtitle}
              customIcon={customIcon}
              iconFillColor={iconFillColor}
            />
          </LinkContainer>
        ),
      )}
    </StyledMenuSection>
  );
};
