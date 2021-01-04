import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { H2, Link } from '../../atoms/';
import { Wrapper } from './styles';

export interface FooterSectionProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

export const FooterSection: FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <Wrapper>
      <H2 fontSize={12} fontWeight={'bold'} color={theme.colors.lightGrey}>
        {title}
      </H2>
      {items.map(({ label, href }) => (
        <Link
          fontSize={14}
          fontWeight={'normal'}
          href={href}
          hoverColor={theme.colors.skGreen}
          color={theme.colors.lightGrey}
        >
          {label}
        </Link>
      ))}
    </Wrapper>
  );
};
