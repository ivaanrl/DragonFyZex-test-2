import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).colors.lightGrey};
  border-radius: 9999px;
  border: 1px solid
    ${(props) => (props.theme as ThemeInterface).colors.borderGrey};
  padding: 5px;
  width: 100%;
  max-width: 800px;
`;
