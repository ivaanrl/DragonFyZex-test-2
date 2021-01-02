import styled, { css } from 'styled-components';
import { StyledMenuSectionProps } from '.';

export const StyledMenuSection = styled.div<StyledMenuSectionProps>`
  width: 100%;

  ${(props) =>
    props.styles &&
    css`
      ${props.styles};
    `}
`;

export const MainLinkContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const LinkContainer = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;
