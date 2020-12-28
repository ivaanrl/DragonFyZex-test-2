import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1 1 %0;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
