import { FC, ReactNode } from 'react';
import { ContentWrapper, Wrapper } from './styles';

export interface TitleWithCtaProps {
  backgroundColor: string;
  title: ReactNode;
  cta: ReactNode;
}

export const TitleWithCta: FC<TitleWithCtaProps> = ({
  backgroundColor,
  title,
  cta,
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <ContentWrapper>
        {title}
        {cta}
      </ContentWrapper>
    </Wrapper>
  );
};
