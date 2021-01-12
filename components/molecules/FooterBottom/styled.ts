import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding-left: 35px;
  padding-right: 35px;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

export const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20px);
  column-gap: 15px;
`;
