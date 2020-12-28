import {
  Container,
  Title,
  InputContainer,
  Input,
  ItemsContainer,
  SubscribeButton,
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
          <SubscribeButton>Subscribe</SubscribeButton>
        </InputContainer>
      </ItemsContainer>
    </Container>
  );
};

export default Subscribe;
