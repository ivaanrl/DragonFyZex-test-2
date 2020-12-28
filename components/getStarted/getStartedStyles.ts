import styled from 'styled-components';
import { PrimaryButton } from '../../styles/globalStyles';
import { ThemeInterface } from '../../styles/theme';

export const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${(props) => (props.theme as ThemeInterface).skGreen};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    height: 60vh;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  margin-bottom: 52px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 30px;
  line-height: 38px;

  @media (min-width: 640px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GetStartedButton = styled(PrimaryButton)`
  background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  color: ${(props) => (props.theme as ThemeInterface).skGreen};
  height: 4rem;
  padding-left: 44px;
  padding-right: 44px;

  &:hover {
    background-color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  }
`;
