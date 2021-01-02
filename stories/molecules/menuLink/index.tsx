import React from 'react';
import { theme } from '../../../styles/theme';
import { Link } from '../../atoms/link/styles';
import { Title } from '../../atoms/title';
import { TextAndIconContainer, TextContainer } from './styles';

export interface MenuLinkProps {
  title: string;
  subtitle?: string;
  customIcon?: SVGElement;
  iconFillColor?: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  title,
  subtitle,
  customIcon,
  iconFillColor = theme.skBlack,
}) => {
  return (
    <Link hoverable color="dark">
      <TextAndIconContainer>
        <TextContainer>
          <Title
            customFontSize={20}
            fontSize="small"
            mainColor="inherit"
            textAlign="left"
            noPadding
          >
            {title}
          </Title>
          <Title
            fontSize="extra-small"
            customFontSize={14}
            customFontWeight="normal"
            mainColor="inherit"
            textAlign="left"
            noPadding
          >
            {subtitle}
          </Title>
        </TextContainer>
        {customIcon ? (
          customIcon
        ) : (
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.89198 4.6808L0.0214841 4.6808L0.0214842 6.51414L7.89198 6.51414L5.14198 9.26414L6.43815 10.5603L10.7529 6.24555C10.9247 6.07365 11.0213 5.84054 11.0213 5.59747C11.0213 5.3544 10.9247 5.12129 10.7529 4.94939L6.43815 0.634636L5.14198 1.9308L7.89198 4.6808Z"
              fill={iconFillColor}
            />
          </svg>
        )}
      </TextAndIconContainer>
    </Link>
  );
};
