import React from 'react';
import { Modal } from '../../atoms/modal';
import { StyledSidebar } from './styles';

export interface StyledSidebarProps {
  customStyles?: {};
}

export interface SidebarProps extends StyledSidebarProps {
  children: React.ReactNode;
  onMouseLeave?: () => void;
  customAnimation?: {
    initial: string;
    animate: string;
    exit: string;
    variants: {};
  };
}

const sidebarVariants = {
  hidden: {
    x: -700,
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  customAnimation,
  customStyles,
  onMouseLeave,
}) => {
  return (
    <>
      <StyledSidebar
        variants={customAnimation ? customAnimation.variants : sidebarVariants}
        initial={customAnimation ? customAnimation.initial : 'hidden'}
        animate={customAnimation ? customAnimation.animate : 'visible'}
        exit={customAnimation ? customAnimation.exit : 'hidden'}
        customStyles={customStyles}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </StyledSidebar>
      <Modal fullScreen />
    </>
  );
};
