import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileMenu from '../components/navbar/mobileMenu';
import Navbar from '../containers/navbar/navbar';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
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
