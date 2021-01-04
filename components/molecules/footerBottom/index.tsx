import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { H6, Img } from '../../atoms';
import { LinksWrapper, SocialsWrapper, TextWrapper, Wrapper } from './styled';

export const FooterBottom: FC = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <H6 color={theme.colors.lightGrey} fontSize={12} margin={0}>
          2021 SKupos. All Rights Reserved.
        </H6>
        <LinksWrapper>
          <H6 color={theme.colors.lightGrey} marginLeft={20} marginRight={20}>
            PRIVACY
          </H6>
          <H6 color={theme.colors.lightGrey} marginRight={20}>
            TERMS
          </H6>
        </LinksWrapper>
      </TextWrapper>
      <SocialsWrapper>
        <Img src="/images/socials/facebook.svg" width={18} height="auto" />
        <Img src="/images/socials/twitter.svg" width={18} height="auto" />
        <Img src="/images/socials/linkedin.svg" width={18} height="auto" />
      </SocialsWrapper>
    </Wrapper>
  );
};
