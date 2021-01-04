import { FC, ReactNode } from 'react';
import { Announcement, AnnouncementProps } from '../../molecules';
import { Wrapper } from './styles';

export interface AnnouncementsProps {
  announcementsInfo: AnnouncementProps[];
  children?: ReactNode;
}

export const Announcements: FC<AnnouncementsProps> = ({
  announcementsInfo,
  children,
}) => {
  return (
    <>
      <Wrapper>
        {announcementsInfo.map((announcmentInfo) => (
          <Announcement {...announcmentInfo} />
        ))}
      </Wrapper>
      {children}
    </>
  );
};
