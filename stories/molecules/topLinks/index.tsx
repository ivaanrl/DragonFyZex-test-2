import React from 'react';
import { Link } from '../../atoms/link';
import { StyledTopLinks } from './styles';

export interface StyledTopLinkProps {
  customStyles?: {};
}

export interface TopLinkProps extends StyledTopLinkProps {
  links: {
    onHover?: () => void;
    onClick?: () => void;
    href: string;
    label: string;
  }[];
}

export const TopLinks: React.FC<TopLinkProps> = ({ links, customStyles }) => {
  return (
    <StyledTopLinks customStyles={customStyles}>
      {links.map(({ onClick, onHover, href, label }) => (
        <Link href={href} onClick={onClick} onHover={onHover}>
          {label}
        </Link>
      ))}
    </StyledTopLinks>
  );
};
