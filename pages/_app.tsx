import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
//import MobileMenu from '../components/navbar/mobileMenu';
import Navbar from '../containers/navbar/navbar';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/footer/footer';
import loadable from '@loadable/component';

const MobileMenu = loadable(() => import('../components/navbar/mobileMenu'));

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          )}
        </AnimatePresence>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
