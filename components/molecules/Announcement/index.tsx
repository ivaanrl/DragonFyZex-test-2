import { FC } from 'react';
import { theme } from '../../../styles/theme';
import { H3, Img, P } from '../../atoms';
import { Wrapper } from './styles';

export interface AnnouncementProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  category: 'BRAND' | 'RETAIL';
  description: string;
}

export const Announcement: FC<AnnouncementProps> = ({
  imgSrc,
  imgAlt,
  title,
  category,
  description,
}) => {
  return (
    <Wrapper>
      <Img src={imgSrc} alt={imgAlt} width={'100%'} height={'auto'} />
      <P
        fontSize={14}
        color={category === 'BRAND' ? theme.colors.orange : theme.colors.berry}
        marginTop={20}
        width={'100%'}
        fontWeight={'bold'}
      >
        {category}
      </P>
      <H3
        fontSize={26}
        lineHeight={'31px'}
        fontWeight={600}
        width={'100%'}
        marginTop={15}
        marginBottom={'20px'}
      >
        {title}
      </H3>
      <P fontSize={16} lineHeight={'26px'} fontWeight={'normal'} width={'100%'}>
        {description}
      </P>
    </Wrapper>
  );
};
