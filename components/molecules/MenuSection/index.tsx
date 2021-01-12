import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { Link, P } from '../../atoms';
import { ItemWrapper, LinkWrapper, Wrapper } from './styles';

export interface MenuSectionProps {
  title: string;
  items: {
    title: string;
    subtitle?: string;
  }[];
}

export const MenuSection: FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <Wrapper>
      <P
        fontSize={14}
        color={theme.colors.skGreen}
        fontWeight={'normal'}
        marginTop={20}
      >
        {title}
      </P>
      {items.map(({ title, subtitle }, index) => (
        <ItemWrapper>
          <LinkWrapper>
            {index === 0 ? (
              <Link fontSize={20} fontWeight={600}>
                {title}
              </Link>
            ) : (
              <>
                <Link fontSize={18} fontWeight={600}>
                  {title}
                </Link>{' '}
                <P fontSize={14} fontWeight="normal">
                  {subtitle}
                </P>
              </>
            )}
          </LinkWrapper>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.89198 4.6808L0.0214841 4.6808L0.0214842 6.51414L7.89198 6.51414L5.14198 9.26414L6.43815 10.5603L10.7529 6.24555C10.9247 6.07365 11.0213 5.84054 11.0213 5.59747C11.0213 5.3544 10.9247 5.12129 10.7529 4.94939L6.43815 0.634636L5.14198 1.9308L7.89198 4.6808Z"
              fill={theme.colors.skBlack}
            />
          </svg>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default MenuSection;
