import styled from 'styled-components';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../styles/globalStyles';
import { ThemeInterface } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  margin-top: 1.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0;
  }
`;

export const LoginButton = styled(SecondaryButton)`
  height: 3rem;
  border: 1px solid ${(props) => (props.theme as ThemeInterface).borderGreyDark};
  margin-bottom: 1.25rem;
  order: 2;
  padding: 0;

  &:hover {
    border: 1px solid ${(props) => (props.theme as ThemeInterface).skBlack};
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 48px;
    border: 1px solid transparent;
    order: 1;
    &:hover {
      border: 1px solid transparent;
      color: ${(props) => (props.theme as ThemeInterface).skGreen};
    }
  }
`;

export const GetStartedButton = styled(PrimaryButton)`
  height: 3rem;
  margin-bottom: 1.25rem;
  order: 1;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    border: 1 px solid transparent;
    order: 2;
  }
`;
