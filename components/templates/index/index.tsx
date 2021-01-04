import React, { FC, ReactNode } from 'react';
import { Content } from './styles';

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  return <Content>{children}</Content>;
};

export default PageTemplate;
