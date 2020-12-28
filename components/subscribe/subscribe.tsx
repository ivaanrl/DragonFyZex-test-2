import {
  Container,
  Title,
  InputContainer,
  Input,
  ItemsContainer,
  SubscribeButtonLG,
  SubscribeButtonSM,
} from './subscribeStyles';

interface Props {
  title: string;
  isYellow: boolean;
}

const Subscribe = ({ title, isYellow }: Props) => {
  return (
    <Container isYellow={isYellow}>
      <ItemsContainer>
        <Title>{title}</Title>
        <InputContainer>
          <Input placeholder="Enter your email address" />
          <SubscribeButtonLG>Subscribe</SubscribeButtonLG>
          <SubscribeButtonSM>Go</SubscribeButtonSM>
        </InputContainer>
      </ItemsContainer>
    </Container>
  );
};

export default Subscribe;
