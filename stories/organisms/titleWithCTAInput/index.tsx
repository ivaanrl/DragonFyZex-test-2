import React from 'react';
import { theme } from '../../../styles/theme';
import { StyledTitleProps, Title } from '../../atoms/title';
import { InputWithCTA } from '../../molecules/inputWithCTA';
import {
  InputContainer,
  ItemsContainer,
  StyledTitleWithCTAInput,
} from './styles';

export interface StyledTitleWithCTAInputProps {
  backgroundColor?: string;
}

export interface TitleWithCTAInputProps extends StyledTitleWithCTAInputProps {
  children: React.ReactNode;
  CTAText?: string;
  PlaceholderText: string;
  titleStyles?: StyledTitleProps;
}

export const TitleWithCTAInput: React.FC<TitleWithCTAInputProps> = ({
  children,
  CTAText,
  PlaceholderText,
  titleStyles,
  backgroundColor = theme.white,
}) => {
  return (
    <StyledTitleWithCTAInput backgroundColor={backgroundColor}>
      <ItemsContainer>
        <Title fontSize="large" {...titleStyles}>
          {children}
        </Title>
        <InputContainer>
          <InputWithCTA CTAText={CTAText} inputPlaceholder={PlaceholderText} />
        </InputContainer>
      </ItemsContainer>
    </StyledTitleWithCTAInput>
  );
};
