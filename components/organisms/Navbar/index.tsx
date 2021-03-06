import { AnimatePresence } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
import { theme } from '../../../styles/theme';
import { Link } from '../../atoms';
import { Logo, LoggedOut, Modal } from '../../molecules';
import { MobileNav } from '../MobileNav';
import { Sidebar } from '../Sidebar';
import {
  LGandUpWrapper,
  LogoWrapper,
  MobileNavWrapper,
  ModalWraper,
  SidebarWrapper,
  Wrapper,
} from './styles';

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

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (showMobileMenu || showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSidebar, showMobileMenu]);

  return (
    <Wrapper>
      <LGandUpWrapper>
        <Link
          href={'#'}
          marginRight={34}
          fontWeight={600}
          hoverColor={theme.colors.skGreen}
          onMouseEnter={() => setShowSidebar(true)}
        >
          Products
        </Link>
        <Link
          href={'#'}
          marginRight={34}
          fontWeight={600}
          hoverColor={theme.colors.skGreen}
        >
          Resources
        </Link>
        <Link
          href={'#'}
          marginRight={34}
          fontWeight={600}
          hoverColor={theme.colors.skGreen}
        >
          Help Center
        </Link>
      </LGandUpWrapper>

      <LogoWrapper>
        <Logo
          drawingColor={theme.colors.skGreen}
          lettersColor={theme.colors.skGreen}
          maxWidth="100%"
        />
      </LogoWrapper>

      <AnimatePresence>
        {showSidebar && (
          <>
            <ModalWraper
              variants={modalVariants}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              <Modal />
            </ModalWraper>
            <SidebarWrapper
              variants={sidebarVariants}
              initial={'hidden'}
              animate={'visible'}
              exit={'hidden'}
            >
              <Sidebar onMouseLeave={() => setShowSidebar(false)} />
            </SidebarWrapper>
          </>
        )}
      </AnimatePresence>

      <LoggedOut
        isOpen={showMobileMenu}
        toggleOpen={() => setShowMobileMenu(!showMobileMenu)}
      />

      <AnimatePresence>
        {showMobileMenu && (
          <MobileNavWrapper
            variants={mobileMenuVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            <MobileNav />
          </MobileNavWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
