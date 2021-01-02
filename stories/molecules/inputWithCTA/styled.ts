import styled from 'styled-components';
import { StyledInputWithCTAProps } from '.';

export const StyledInputWithCTA = styled.div<StyledInputWithCTAProps>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 9999px;
  border: 1px solid ${(props) => props.borderColor};
  padding: 5px;
`;
