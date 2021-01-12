import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { Divider } from '../../atoms/Divider';
import {
  FooterBottom,
  FooterSection,
  FooterSectionProps,
} from '../../molecules';
import { FooterButton } from '../../molecules/FooterButton';
import { Logo } from '../../molecules/Logo';
import {
  ContentWrapper,
  FirstColumn,
  GridWrapper,
  Svg,
  Wrapper,
} from './styles';
export interface FooterProps {
  footerSections: FooterSectionProps[];
}

export const Footer: FC<FooterProps> = ({ footerSections }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <GridWrapper>
          <FirstColumn>
            <Logo
              drawingColor={theme.colors.skGreen}
              lettersColor={theme.colors.lightGrey}
              maxWidth="100px"
            />
            <Divider height={40} />
            <FooterButton>
              Et etiam cursus sit et et fingilla curabitur nisl ultrices.
            </FooterButton>
            <Divider height={20} />
            <FooterButton>
              Et etiam cursus sit et et fingilla curabitur nisl ultrices.
            </FooterButton>
          </FirstColumn>
          {footerSections.map((footerSectionProps) => (
            <FooterSection {...footerSectionProps} />
          ))}
        </GridWrapper>
        <FooterBottom />
      </ContentWrapper>
    </Wrapper>
  );
};
