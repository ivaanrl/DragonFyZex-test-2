import styled from 'styled-components';
import { PrimaryButton } from '../../styles/globalStyles';
import { ThemeInterface } from '../../styles/theme';

export const Container = styled.div<{ isYellow: boolean }>`
  background-color: ${(props) =>
    props.isYellow
      ? (props.theme as ThemeInterface).yellow
      : (props.theme as ThemeInterface).lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding-top: 40px;
  padding-bottom: 90px;

  @media (min-width: 640px) {
    padding-top: 0;
    padding-top: 0;
    height: 55vh;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
`;

export const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.theme as ThemeInterface).skBlack};
  margin-bottom: 52px;
  font-size: 36px;
  line-height: 44px;
  padding-right: 20px;
  padding-left: 20px;

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

export const InputContainer = styled.div`
  width: 80%;
  margin: auto;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 9999px;
  padding: 5px;
  border: 1px solid ${(props) => (props.theme as ThemeInterface).borderGrey};
`;

export const SubscribeButtonLG = styled(PrimaryButton)`
  height: 3rem;
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

export const SubscribeButtonSM = styled(PrimaryButton)`
  height: 3rem;

  display: block;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 9999px;
  padding-left: 20px;
  width: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
  }

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;
