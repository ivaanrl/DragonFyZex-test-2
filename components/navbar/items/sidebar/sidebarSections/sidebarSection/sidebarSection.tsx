import {
  Button,
  Container,
  ItemsButton,
  ItemSubtitle,
  ItemText,
  TextAndSubtitleContainer,
  Title,
} from './sidebarSectionStyles';

interface Props {
  title: string;
  main: string;
  items: {
    [name: string]: {
      subtitle: string;
    };
  };
}

const SidebarSection = ({ title, main, items }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button>
        {main}
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.89198 4.6808L0.0214841 4.6808L0.0214842 6.51414L7.89198 6.51414L5.14198 9.26414L6.43815 10.5603L10.7529 6.24555C10.9247 6.07365 11.0213 5.84054 11.0213 5.59747C11.0213 5.3544 10.9247 5.12129 10.7529 4.94939L6.43815 0.634636L5.14198 1.9308L7.89198 4.6808Z" />
        </svg>
      </Button>
      {Object.keys(items).map((item) => {
        const subtitle = items[item].subtitle;
        return (
          <ItemsButton key={item}>
            <TextAndSubtitleContainer>
              <ItemText className="font-semibold text-lg">{item} </ItemText>
              <ItemSubtitle className="text-sm">{subtitle} </ItemSubtitle>
            </TextAndSubtitleContainer>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.89198 4.6808L0.0214841 4.6808L0.0214842 6.51414L7.89198 6.51414L5.14198 9.26414L6.43815 10.5603L10.7529 6.24555C10.9247 6.07365 11.0213 5.84054 11.0213 5.59747C11.0213 5.3544 10.9247 5.12129 10.7529 4.94939L6.43815 0.634636L5.14198 1.9308L7.89198 4.6808Z"
                fill="#0A2533"
              />
            </svg>
          </ItemsButton>
        );
      })}
    </Container>
  );
};

export default SidebarSection;
