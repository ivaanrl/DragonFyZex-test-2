import { FC, ReactNode } from 'react';
import { ContentWrapper, Wrapper } from './styles';

export interface TitleWithCTAProps {
  backgroundColor: string;
  title: ReactNode;
  cta: ReactNode;
}

export const TitleWithCTA: FC<TitleWithCTAProps> = ({
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
