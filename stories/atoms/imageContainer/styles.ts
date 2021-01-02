import Image from 'next/image';
import styled, { css } from 'styled-components';
import { StyledImageContainerProps } from '.';

export const StyledImageContainer = styled.div<StyledImageContainerProps>`
  ${(props) =>
    props.size === 'extra-large' &&
    css`
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 1024px) {
        max-width: 70%;
      }
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      max-height: ${props.imgHeight}px;
      overflow-y: hidden;
    `}
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  height: auto;
`;
