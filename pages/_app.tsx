import '../styles/globals.css';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../stories/organisms/footer';
import { Navbar } from '../stories/organisms/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar backgroundColor={theme.yellow} />
      <Component {...pageProps} />
      <Footer
        footerGridSectionProps={{
          footerSectionProps: [
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
          ],
        }}
        footerBottomProps={{
          links: ['TERMS', 'PRIVACY'],
          socialIcons: [
            '/images/socials/facebook.svg',
            '/images/socials/twitter.svg',
            '/images/socials/linkedin.svg',
          ],
        }}
      />
    </ThemeProvider>
  );
}

export default MyApp;
