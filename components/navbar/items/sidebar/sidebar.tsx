import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import { NavbarSectionLink } from '../../../../styles/globalStyles';
import SidebarSections from './sidebarSections/sidebarSections';
import {
  Modal,
  SidebarContainer,
  SidebarLinksContainer,
} from './sidebarStyles';

interface Props {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
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

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.4,
  },
};

const Sidebar = ({ setShowSidebar }: Props) => {
  return (
    <>
      <Modal
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => setShowSidebar(false)}
        key={new Date().toString()}
      ></Modal>
      <SidebarContainer
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onMouseLeave={() => setShowSidebar(false)}
        key={new Date().toString()}
      >
        <SidebarLinksContainer>
          <NavbarSectionLink href="#">Products</NavbarSectionLink>
          <NavbarSectionLink href="#">Resources</NavbarSectionLink>
          <NavbarSectionLink href="#">Help Center</NavbarSectionLink>
        </SidebarLinksContainer>
        <SidebarSections />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
