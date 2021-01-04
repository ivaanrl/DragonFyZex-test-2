import styled from 'styled-components';

export const Wrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
