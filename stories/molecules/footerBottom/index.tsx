import React from 'react';
import { theme } from '../../../styles/theme';
import { Title } from '../../atoms/title/styles';
import {
  LinksContainer,
  Social,
  SocialContainer,
  SocialsContainer,
  StyledFooterBottom,
  TextContainer,
} from './styled';

export interface StyledFooterBottomProps {}

export interface FooterBottomProps extends StyledFooterBottomProps {
  links: string[];
  linksColor?: string;
  socialIcons: string[];
}

export const FooterBottom: React.FC<FooterBottomProps> = ({
  links,
  socialIcons,
  linksColor = theme.lightGrey,
}) => {
  return (
    <StyledFooterBottom>
      <TextContainer>
        <Title
          fontSize="extra-small"
          mainColor={linksColor}
          style={{ paddingLeft: 0 }}
        >
          2021 SKupos. All Rights Reserved.
        </Title>
        <LinksContainer>
          {links.map((link) => (
            <Title fontSize="extra-small" mainColor={linksColor}>
              {link}
            </Title>
          ))}
        </LinksContainer>
      </TextContainer>
      <SocialsContainer>
        {socialIcons.map((socialIcon) => (
          <SocialContainer>
            <Social src={socialIcon} />
          </SocialContainer>
        ))}
      </SocialsContainer>
    </StyledFooterBottom>
  );
};
