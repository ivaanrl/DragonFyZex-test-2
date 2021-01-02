import React from 'react';
import { theme } from '../../../styles/theme';
import { Logo } from '../../atoms/logo';
import { FooterButton } from '../../molecules/footerButton';
import {
  ButtonContainer,
  LogoContainer,
  StyledLogoAnd2FooterButton,
} from './styles';

export interface StyledLogoAnd2FooterButtonProps {}

export interface LogoAnd2FooterButtonProps
  extends StyledLogoAnd2FooterButtonProps {}

export const LogoAnd2FooterButton: React.FC<LogoAnd2FooterButtonProps> = () => {
  return (
    <StyledLogoAnd2FooterButton>
      <LogoContainer>
        <Logo letterColor={theme.lightGrey} />
      </LogoContainer>
      <ButtonContainer>
        <FooterButton label="Et etiam cursus sit et et fringilla curabitur nisl ultrices." />
      </ButtonContainer>
      <ButtonContainer>
        <FooterButton label="Et etiam cursus sit et et fringilla curabitur nisl ultrices." />
      </ButtonContainer>
    </StyledLogoAnd2FooterButton>
  );
};
