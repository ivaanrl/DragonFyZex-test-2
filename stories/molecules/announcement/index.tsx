import Image from 'next/image';
import React from 'react';
import { theme } from '../../../styles/theme';
import { ImageContainer } from '../../atoms/imageContainer';
import { Text } from '../../atoms/text';
import { Title } from '../../atoms/title';
import { StyledAnnouncement } from './styled';

export interface StyledAnnouncementProps {}

export interface AnnouncementProps {
  category: 'RETAIL' | 'BRAND';
  title: string;
  subtitle: string;
  imageSrc: string;
  imageDescription: string;
}

export const Announcement: React.FC<AnnouncementProps> = ({
  category,
  title,
  subtitle,
  imageSrc,
  imageDescription,
}) => {
  return (
    <StyledAnnouncement>
      <ImageContainer
        imgWidth={541}
        imgHeight={371}
        src={imageSrc}
        alt={imageDescription}
        matchImageSize
      />
      <Title
        fontSize="extra-small"
        textAlign="left"
        mainColor={category === 'RETAIL' ? theme.orange : theme.berry}
        noPadding
        customStyles={{ marginTop: '30px', marginBottom: '20px' }}
        customFontSize={14}
      >
        {category}
      </Title>
      <Title fontSize="small" textAlign="left" noPadding>
        {title}
      </Title>
      <Text>{subtitle}</Text>
    </StyledAnnouncement>
  );
};
