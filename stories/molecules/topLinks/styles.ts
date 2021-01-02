import styled, { css } from 'styled-components';
import { StyledTopLinkProps } from '.';
import { ThemeInterface } from '../../../styles/theme';

export const StyledTopLinks = styled.div<StyledTopLinkProps>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 48px;
  align-items: center;

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles};
    `}
`;
