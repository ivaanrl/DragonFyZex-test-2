import styled, { css } from 'styled-components';
import { StyledTitleWithCTAInputProps } from '.';
import { ScreenSizes } from '../../../styles/theme';

export const StyledTitleWithCTAInput = styled.div<StyledTitleWithCTAInputProps>`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 45px;
  padding-bottom: 45px;

  @media (min-width: ${ScreenSizes.sm}px) {
    height: 55vh;
  }
`;

export const ItemsContainer = styled.div`
  max-width: 900px;
`;

export const InputContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
`;
