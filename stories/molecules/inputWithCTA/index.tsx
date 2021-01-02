import React from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms/button';
import { Input } from '../../atoms/input';
import { StyledInputWithCTA } from './styled';

export interface StyledInputWithCTAProps {
  backgroundColor?: string;
  borderColor?: string;
}

export interface InputWithCTAProps extends StyledInputWithCTAProps {
  CTAText: string;
  inputPlaceholder: string;
  primaryButton?: boolean;
  inputColor?: 'dark' | 'light';
}

export const InputWithCTA: React.FC<InputWithCTAProps> = ({
  CTAText,
  backgroundColor = theme.lightGrey,
  borderColor = theme.borderGrey,
  inputPlaceholder = 'Placeholder',
  inputColor = 'light',
  primaryButton = true,
}) => {
  return (
    <StyledInputWithCTA
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <Input
        placeholder={inputPlaceholder}
        inputSize="large"
        color={inputColor}
      />
      <Button primary={primaryButton}>{CTAText}</Button>
    </StyledInputWithCTA>
  );
};
