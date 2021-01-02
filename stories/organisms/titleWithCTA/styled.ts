import styled, { css } from 'styled-components';
import { StyledTitleWithCTAProps } from '.';

export const StyledTitleWithCTA = styled.div<StyledTitleWithCTAProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${(props) => props.backgroundColor};

  padding-left: 20px;
  padding-right: 20px;

  ${(props) =>
    props.noPadding &&
    css`
      padding: 0;
    `}

  @media (min-width: 640px) {
    height: 55vh;
  }

  ${(props) =>
    props.styles &&
    css`
      ${props.styles};
    `}
`;

export const ButtonContainer = styled.div<{
  align: 'flex-start' | 'flex-end' | 'center';
}>`
  display: flex;
  justify-content: ${(props) => props.align};
  width: 100%;
`;

export const ItemsContainer = styled.div<{ size: 'medium' | 'large' }>`
  ${(props) =>
    props.size === 'medium' &&
    css`
      max-width: 700px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      max-width: 1000px;
    `}
`;
