import {
  ButtonContainer,
  Container,
  GetStartedButton,
  Title,
  ItemsContainer,
} from './getStartedStyles';

const GetStarted = () => {
  return (
    <Container>
      <ItemsContainer>
        <Title>Unlock the power of 14,000+ retailers connected to Skupos</Title>
        <ButtonContainer>
          <GetStartedButton>Get started</GetStartedButton>
        </ButtonContainer>
      </ItemsContainer>
    </Container>
  );
};

export default GetStarted;
