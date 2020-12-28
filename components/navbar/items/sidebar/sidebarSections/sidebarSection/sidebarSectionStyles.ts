import styled from 'styled-components';
import { ThemeInterface } from '../../../../../../styles/theme';

export const Container = styled.div`
  padding-right: 34px;
  margin-bottom: 2.25rem;
`;

export const Title = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => (props.theme as ThemeInterface).skGreen};
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  font-weight: 600;

  &:hover {
    color: ${(props) => (props.theme as ThemeInterface).skGreen};
  }

  &:focus {
    outline: none;
  }
`;

export const ItemsButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  &:hover {
    color: ${(props) => (props.theme as ThemeInterface).text};
  }

  &:focus {
    outline: none;
  }
`;

export const ItemText = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const ItemSubtitle = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const TextAndSubtitleContainer = styled.div`
  &:hover {
    color: ${(props) => (props.theme as ThemeInterface).skGreen};
  }
  text-align: left;
`;
