import styled, { css } from 'styled-components';
import { ScreenSizes, ThemeInterface } from '../../../styles/theme';
import { StyledLoggedOutProps } from '.';

export const StyledLoggedOut = styled.div<StyledLoggedOutProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1.25rem;
  align-items: center;

  @media (min-width: ${ScreenSizes.lg}px) {
    width: auto;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0;
  }
`;

export const LgAndUp = styled.div`
  display: none;
  margin-right: 34px;

  @media (min-width: ${ScreenSizes.lg}px) {
    display: block;
  }
`;

export const MdAndDown = styled.div`
  margin-top: 20px;
  width: 100%;
  display: block;

  @media (min-width: ${ScreenSizes.lg}px) {
    display: none;
  }
`;
