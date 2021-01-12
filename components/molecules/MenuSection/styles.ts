import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const Wrapper = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.theme as ThemeInterface).colors.skGreen};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
