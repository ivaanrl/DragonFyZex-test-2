import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  max-width: 1460px;
  padding-right: 30px;
  padding-left: 30px;
  margin: auto;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
