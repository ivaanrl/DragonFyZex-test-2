import styled from 'styled-components';

export const BigScreenWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SmallScreenWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;
