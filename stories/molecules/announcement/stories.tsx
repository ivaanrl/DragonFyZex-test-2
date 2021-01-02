import React from 'react';
import { Announcement, AnnouncementProps } from '.';

export default {
  title: 'molecules/Announcement',
  component: Announcement,
};

export const Example = () => (
  <Announcement
    category="RETAIL"
    title="Lectus sed cursos eu adispiscing congue. Egestas et."
    subtitle="Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis."
    imageSrc="https://images.unsplash.com/photo-1500856311637-fc0249e33e4c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
    imageDescription="image alt text"
  />
);
