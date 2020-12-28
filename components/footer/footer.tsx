import { motion } from 'framer-motion';
import FooterGrid from './footerGrid/footerGrid';
import {
  BottomRow,
  ChevronSvg,
  Container,
  FirstGridColumn,
  FooterButton,
  GridColumn,
  GridContainer,
  ImgItem,
  ImgItemContainer,
  ImgItemsContainer,
  Item,
  ItemsContainer,
  Logo,
  LogoContainer,
  Path,
  PrivacyAndTerms,
} from './footerStyles';

const Footer = () => {
  return (
    <Container>
      <GridContainer>
        <FirstGridColumn>
          <LogoContainer>
            <Logo src="/images/Skupos/logoDark.svg" />
          </LogoContainer>
          <FooterButton>
            Et etiam cursus sit et et fringilla curabitur nisl ultrices.
            <ChevronSvg
              style={{ rotate: 90 }}
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path d="M10.9133 5.65273L9.51328 7.05273L5.51328 3.05273L1.51328 7.05273L0.113281 5.65273L5.51328 0.252735L10.9133 5.65273Z" />
            </ChevronSvg>
          </FooterButton>
          <FooterButton>
            Et etiam cursus sit et et fringilla curabitur nisl ultrices.
            <ChevronSvg
              style={{ rotate: 90 }}
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path d="M10.9133 5.65273L9.51328 7.05273L5.51328 3.05273L1.51328 7.05273L0.113281 5.65273L5.51328 0.252735L10.9133 5.65273Z" />
            </ChevronSvg>
          </FooterButton>
        </FirstGridColumn>
        <GridColumn>
          <FooterGrid
            title="CONVENIENCE RETAIL"
            items={['Overview', 'Scan Data', 'Engage', 'Pricing']}
          />
        </GridColumn>
        <GridColumn>
          <FooterGrid
            title="ENTERPRISE BRANDS"
            items={['Overview', 'Insights', 'Engage for Brands', 'Predict']}
          />
        </GridColumn>
        <GridColumn>
          <FooterGrid
            title="RESOURCES"
            items={[
              'Customer Stories',
              'Blog',
              'Product Updates',
              'Events',
              'Videos',
              'Downloads',
            ]}
          />
        </GridColumn>
        <GridColumn>
          <FooterGrid
            title="COMPANY"
            items={[
              'About Us',
              'Press',
              'Careers',
              'Contact',
              'Referral Program',
              'Support',
            ]}
          />
        </GridColumn>
      </GridContainer>
      <BottomRow>
        <ItemsContainer>
          <Item>© 2020 Skupos. All Rights Reserved.</Item>
          <PrivacyAndTerms>
            <Item>TERMS</Item>
            <Item>PRIVACY</Item>
          </PrivacyAndTerms>
        </ItemsContainer>
        <ImgItemsContainer>
          <ImgItemContainer>
            <ImgItem src="/images/socials/facebook.svg" />
          </ImgItemContainer>
          <ImgItemContainer>
            <ImgItem src="/images/socials/twitter.svg" />
          </ImgItemContainer>
          <ImgItemContainer>
            <ImgItem src="/images/socials/linkedin.svg" />
          </ImgItemContainer>
        </ImgItemsContainer>
      </BottomRow>
    </Container>
  );
};

export default Footer;
