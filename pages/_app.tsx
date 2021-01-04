import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { Navbar } from '../components/organisms/navbar';
import { Footer } from '../components/organisms/footer';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isMounted && (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer
            footerSections={[
              {
                title: 'CONVENIENCE RETAIL',
                items: [
                  { label: 'Overview', href: '#' },
                  { label: 'Scan Data', href: '#' },
                  { label: 'Engage', href: '#' },
                  { label: 'Pricing', href: '#' },
                ],
              },
              {
                title: 'ENTERPRISE BRANDS',
                items: [
                  { label: 'Overview', href: '#' },
                  { label: 'Insights', href: '#' },
                  { label: 'Engage for Brands', href: '#' },
                  { label: 'Predict', href: '#' },
                ],
              },
              {
                title: 'RESOURCES',
                items: [
                  { label: 'Customer Stories', href: '#' },
                  { label: 'Blog', href: '#' },
                  { label: 'Product Updates', href: '#' },
                  { label: 'Events', href: '#' },
                  { label: 'Videos', href: '#' },
                  { label: 'Downloads', href: '#' },
                ],
              },
              {
                title: 'COMPANY',
                items: [
                  { label: 'About Us', href: '#' },
                  { label: 'Press', href: '#' },
                  { label: 'Careers', href: '#' },
                  { label: 'Contact', href: '#' },
                  { label: 'Referral Program', href: '#' },
                  { label: 'Support', href: '#' },
                ],
              },
            ]}
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
