import React from 'react';
import { theme } from '../../../styles/theme';
import { Button, StyledButtonProps } from '../../atoms/button';
import { StyledTitleProps, Title } from '../../atoms/title';
import { ButtonContainer, ItemsContainer, StyledTitleWithCTA } from './styled';

export interface StyledTitleWithCTAProps {
  backgroundColor?: string;
  styles?: {};
  noPadding?: boolean;
}

export interface TitleWithCTAProps extends StyledTitleWithCTAProps {
  children: React.ReactNode;
  contentSize?: 'medium' | 'large';
  CTAText?: string;
  buttonStyles?: StyledButtonProps;
  buttonAlign?: 'flex-start' | 'flex-end' | 'center';
  titleStyles?: StyledTitleProps;
}

export const TitleWithCTA: React.FC<TitleWithCTAProps> = ({
  children,
  backgroundColor = theme.lightGrey,
  CTAText,
  buttonStyles,
  buttonAlign = 'center',
  titleStyles,
  contentSize = 'medium',
  noPadding = false,
  styles,
}) => {
  return (
    <StyledTitleWithCTA
      backgroundColor={backgroundColor}
      styles={styles}
      noPadding={noPadding}
    >
      <ItemsContainer size={contentSize}>
        <Title {...titleStyles}>{children}</Title>

        <ButtonContainer align={buttonAlign}>
          <Button {...buttonStyles}>{CTAText}</Button>
        </ButtonContainer>
      </ItemsContainer>
    </StyledTitleWithCTA>
  );
};
