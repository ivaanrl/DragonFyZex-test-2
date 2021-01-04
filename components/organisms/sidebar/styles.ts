import styled from 'styled-components';
import { ThemeInterface } from '../../../styles/theme';

export const Wrapper = styled.div`
  height: 100%;
  min-width: 400px;
  max-width: max-content;
  padding-right: 34px;
  padding-left: 34px;
  background-color: ${(props) =>
    (props.theme as ThemeInterface).colors.lightGrey};
`;

export const TopWrapper = styled.div`
  height: 96px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
