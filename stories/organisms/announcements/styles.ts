import styled, { css } from 'styled-components';
import { StyledAnnouncementsProps } from '.';

export const StyledAnnouncements = styled.div<StyledAnnouncementsProps>`
  max-width: 1460px;
  margin: auto;
  display: grid;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  padding-right: 30px;
  padding-left: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LoadMoreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const MainContainer = styled.div<{
  marginBottom: number;
  marginTop: number;
}>`
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-top: ${(props) => props.marginTop}px;
`;
