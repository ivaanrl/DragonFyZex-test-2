import React from 'react';
import { theme } from '../../../styles/theme';
import { Button } from '../../atoms/button';
import { Announcement, AnnouncementProps } from '../../molecules/announcement';
import {
  LoadMoreContainer,
  StyledAnnouncements,
  MainContainer,
} from './styles';

export interface StyledAnnouncementsProps {}

export interface AnnouncementsProps extends StyledAnnouncementsProps {
  announcements: AnnouncementProps[];
  canLoadMore?: boolean;
  onLoadMoreClick?: () => void;
  marginTop?: number;
  marginBottom?: number;
}

export const Announcements: React.FC<AnnouncementsProps> = ({
  announcements,
  canLoadMore,
  onLoadMoreClick,
  marginBottom = 0,
  marginTop = 0,
}) => {
  return (
    <MainContainer marginTop={marginTop} marginBottom={marginBottom}>
      <StyledAnnouncements>
        {announcements.map((announcement) => {
          return <Announcement {...announcement} />;
        })}
      </StyledAnnouncements>
      {canLoadMore ? (
        <LoadMoreContainer>
          <Button
            primary
            size="large"
            styles={{ backgroundColor: theme.skBlack }}
            onClick={onLoadMoreClick}
          >
            Load more
          </Button>
        </LoadMoreContainer>
      ) : null}
    </MainContainer>
  );
};
