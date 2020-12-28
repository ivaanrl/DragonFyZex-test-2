import styled from 'styled-components';
import { ThemeInterface } from '../../styles/theme';
import { motion } from 'framer-motion';

export const Container = styled.div`
  min-height: fit-content;
  padding-top: 94px;
  padding-right: 34px;
  padding-left: 34px;
  background-color: ${(props) => (props.theme as ThemeInterface).skBlack};
  padding-bottom: 80px;
`;

export const GridContainer = styled.div`
  display: grid;
  color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  max-width: 1400px;
  margin: auto;
  column-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr repeat(4, 1fr);
  }
`;

export const FirstGridColumn = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

export const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 35%;
`;

export const FooterButton = styled.button`
  font-size: 13px;
  padding: 20px;
  padding-right: 40px;
  width: 80%;
  background-color: transparent;
  color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  border: 1px solid
    ${(props) => (props.theme as ThemeInterface).lightGreyTransparent};
  margin-bottom: 20px;
  border-radius: 4px;
  position: relative;

  &:hover {
    border: 1px solid ${(props) => (props.theme as ThemeInterface).white};
    color: ${(props) => (props.theme as ThemeInterface).white};
    cursor: pointer;
  }
`;

export const Path = styled.path`
  fill: ${(props) => (props.theme as ThemeInterface).lightGrey};
`;

export const ChevronSvg = styled(motion.svg)`
  position: absolute;
  right: 20px;
`;

export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
  margin-top: 120px;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrivacyAndTerms = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

export const Item = styled.div`
  color: ${(props) => (props.theme as ThemeInterface).lightGrey};
  font-size: 12px;
  font-weight: bold;
  margin-right: 20px;
`;

export const ImgItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

export const ImgItemContainer = styled.a`
  cursor: pointer;
  margin-right: 30px;
`;

export const ImgItem = styled.img``;
