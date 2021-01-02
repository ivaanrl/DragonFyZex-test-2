import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { theme } from '../../../styles/theme';
import { Link } from '../../atoms/link';
import { Logo } from '../../atoms/logo';
import { LoggedOut } from '../../molecules/loggedOut';
import { MenuSection } from '../../molecules/menuSection';
import { MobileMenuToggleButton } from '../../molecules/mobileMenuToggleButton';
import { ShrinkableLink } from '../../molecules/shrinkableLink';
import { TopLinks } from '../../molecules/topLinks';
import { MobileNavigation } from '../mobileNavigation';
import { Sidebar } from '../sidebar';
import {
  FullWidthLG,
  LoggedOutContainer,
  MdAndDown,
  MobileNavigationContainer,
  StyledNavbar,
} from './styles';

export interface NavbarProps {
  backgroundColor?: string;
  borderColor?: string;
}

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const Navbar: React.FC<NavbarProps> = ({
  backgroundColor = theme.lightGrey,
  borderColor = theme.borderGreyLight,
}) => {
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
    <StyledNavbar backgroundColor={backgroundColor} borderColor={borderColor}>
      <FullWidthLG>
        <TopLinks
          links={[
            {
              href: '#',
              label: 'Products',
              onHover: () => setShowSidebar(true),
            },
            {
              href: '#',
              label: 'Resources',
            },
            {
              href: '#',
              label: 'Help Center',
            },
          ]}
        />
      </FullWidthLG>
      <Logo />
      <AnimatePresence>
        {showSidebar && (
          <Sidebar onMouseLeave={() => setShowSidebar(false)}>
            <TopLinks
              links={[
                { label: 'Products', href: '#' },
                { label: 'Resources', href: '#' },
                { label: 'Help Center', href: '#' },
              ]}
              customStyles={{
                height: '96px',
              }}
            />
            <MenuSection
              title="CONVENIENCE RETAILS"
              items={[
                {
                  title: 'For C-Stores',
                },
                {
                  title: 'Scan Data',
                  subtitle: 'Earn more from brands and customers.',
                },
                {
                  title: 'Engage',
                  subtitle: 'Unlock exclusive brand promotions.',
                },
                {
                  title: 'Pricing',
                },
              ]}
            />
            <MenuSection
              title="ENTERPRISE BRANDS"
              items={[
                {
                  title: 'For Brands',
                },
                {
                  title: 'Insights',
                  subtitle: 'Earn more from brands and customers.',
                },
                {
                  title: 'Engage',
                  subtitle: 'Rein in your customer understanding.',
                },
                {
                  title: 'Engage for Brands',
                  subtitle: 'Direct strategic promos across c-stores.',
                },
              ]}
            />
          </Sidebar>
        )}
      </AnimatePresence>

      <FullWidthLG>
        <LoggedOut />
      </FullWidthLG>

      <MdAndDown>
        <MobileMenuToggleButton
          isOpen={showMobileMenu}
          toggleOpen={() => setShowMobileMenu(!showMobileMenu)}
        />
      </MdAndDown>
      <AnimatePresence>
        {showMobileMenu && (
          <MobileNavigationContainer
            variants={mobileMenuVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
            key={new Date().toString()}
          >
            <MobileNavigation>
              <ShrinkableLink label="Products">
                <MenuSection
                  title="CONVENIENCE RETAILS"
                  items={[
                    {
                      title: 'For C-Stores',
                    },
                    {
                      title: 'Scan Data',
                      subtitle: 'Earn more from brands and customers.',
                    },
                    {
                      title: 'Engage',
                      subtitle: 'Unlock exclusive brand promotions.',
                    },
                    {
                      title: 'Pricing',
                    },
                  ]}
                  styles={{ paddingLeft: '20px' }}
                />
              </ShrinkableLink>
              <Link styles={{ paddingLeft: '20px' }}>Resources</Link>
              <Link styles={{ paddingLeft: '20px' }}>Help Center</Link>
              <LoggedOutContainer>
                <LoggedOut />
              </LoggedOutContainer>
            </MobileNavigation>
          </MobileNavigationContainer>
        )}
      </AnimatePresence>
    </StyledNavbar>
  );
};
