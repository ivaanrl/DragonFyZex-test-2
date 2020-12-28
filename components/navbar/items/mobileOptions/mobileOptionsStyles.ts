import styled from 'styled-components';
import { ThemeInterface } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex: 1 1 %0;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
`;
