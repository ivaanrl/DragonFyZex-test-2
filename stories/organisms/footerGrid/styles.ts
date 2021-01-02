import styled from 'styled-components';
import { StyledFooterGridProps } from '.';

export const StyledFooterGrid = styled.div<StyledFooterGridProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 40px;
  max-width: 1400px;
  margin: auto;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr repeat(4, 1fr);
  }
`;

export const FirstGridColumn = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;
