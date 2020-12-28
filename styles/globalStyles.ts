import styled, { createGlobalStyle } from 'styled-components';
import { theme, ThemeInterface } from './theme';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  font-family:'Open Sans';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
  font-family:'Open Sans';
  background-color: #F5F7FA;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button{
  border:none;
  font-family:'Open Sans';
  padding:0;

  &:focus{
    outline:none;
  }

  &:hover{
    cursor:pointer;
  }
}
`;

export const Button = styled.button`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 16px;
  border: none;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => (props.theme as ThemeInterface).skGreen};
  color:${(props) => (props.theme as ThemeInterface).white};

  &:hover{
    background-color ${(props) => (props.theme as ThemeInterface).skBlack};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => (props.theme as ThemeInterface).lightGrey};

  &:hover {
    border: 1px solid ${(props) => (props.theme as ThemeInterface).skBlack};
  }
`;

export const NavbarLink = styled.a`
  margin-right: 48px;
  font-weight: 600;
  &:hover {
    color: ${(props) => (props.theme as ThemeInterface).skGreen};
    cursor: pointer;
  }
`;

export const NavbarSectionLink = styled(NavbarLink)`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
