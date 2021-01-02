import React from 'react';
import { Announcements } from '.';

export default {
  title: 'organisms/Announcements',
  component: Announcements,
};

const AnnouncementsArray = [
  {
    category: 'RETAIL' as 'RETAIL' | 'BRAND',
    title: 'Lectus sed cursos eu adispiscing congue. Egestas et.',
    subtitle:
      'Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.',
    imageSrc: 'https://source.unsplash.com/random',
    imageDescription: 'random unsplash image',
  },
  {
    category: 'RETAIL' as 'RETAIL' | 'BRAND',
    title: 'Lectus sed cursos eu adispiscing congue. Egestas et.',
    subtitle:
      'Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.',
    imageSrc: 'https://source.unsplash.com/random',
    imageDescription: 'random unsplash image',
  },
  {
    category: 'RETAIL' as 'RETAIL' | 'BRAND',
    title: 'Lectus sed cursos eu adispiscing congue. Egestas et.',
    subtitle:
      'Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.',
    imageSrc: 'https://source.unsplash.com/random',
    imageDescription: 'random unsplash image',
  },
  {
    category: 'RETAIL' as 'RETAIL' | 'BRAND',
    title: 'Lectus sed cursos eu adispiscing congue. Egestas et.',
    subtitle:
      'Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.',
    imageSrc: 'https://source.unsplash.com/random',
    imageDescription: 'random unsplash image',
  },
  {
    category: 'RETAIL' as 'RETAIL' | 'BRAND',
    title: 'Lectus sed cursos eu adispiscing congue. Egestas et.',
    subtitle:
      'Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.',
    imageSrc: 'https://source.unsplash.com/random',
    imageDescription: 'random unsplash image',
  },
  {
    category: 'RETAIL' as 'RETAIL' | 'BRAND',
    title: 'Lectus sed cursos eu adispiscing congue. Egestas et.',
    subtitle:
      'Mauris aliquet varius nec vitae. Malesuada parturient aliquet auctor nunc eleifend suscipit viverra. Mattis facilisis viverra turpis.',
    imageSrc: 'https://source.unsplash.com/random',
    imageDescription: 'random unsplash image',
  },
];

export const GridOf6 = () => (
  <Announcements announcements={AnnouncementsArray} />
);

export const LoadMoreGridOf6 = () => (
  <Announcements announcements={AnnouncementsArray} canLoadMore={true} />
);
