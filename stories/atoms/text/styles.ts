import styled, { css } from 'styled-components';
import { StyledTextProps } from '.';

export const StyledText = styled.div<StyledTextProps>`
  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 16px;
      line-height: 26px;
    `}

    ${(props) =>
      props.size === 'small' &&
      css`
        font-size: 14px;
        line-height: 24px;
      `}

  text-align: ${(props) => props.align};
  font-weight:${(props) => props.fontWeight};
  color:${(props) => props.color};

  ${(props) =>
    props.style &&
    css`
      ${props.style};
    `}
`;
