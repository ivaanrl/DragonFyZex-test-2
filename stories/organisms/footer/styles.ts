import styled from 'styled-components';
import { StyledFooterProps } from '.';

export const StyledFooter = styled.div<StyledFooterProps>`
  background-color: ${(props) => props.backgroundColor};
  padding-top: 85px;
  padding-bottom: 85px;
  padding-right: 34px;
  padding-left: 34px;
`;

export const FooterBottomContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  margin-top: 120px;
`;
