import styled from 'styled-components';

export const StyledFooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SocialContainer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

export const Social = styled.img``;
