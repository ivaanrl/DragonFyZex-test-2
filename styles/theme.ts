export interface ThemeInterface {
  skGreen: string;
  text: string;
  yellow: string;
  white: string;
  orange: string;
  berry: string;
  skBlack: string;
  lightGrey: string;
  lightGreyTransparent: string;
  borderGreyLight: string;
  borderGrey: string;
  borderGreyDark: string;
}

export const theme: ThemeInterface = {
  skGreen: '#00B481',
  text: '#000000',
  yellow: '#FBD224',
  white: '#ffffff',
  orange: '#F8962F',
  berry: '#D42859',
  skBlack: '#0A2533',
  lightGrey: '#F5F7FA',
  lightGreyTransparent: 'rgba(245,247,250,0.2)',
  borderGreyLight: 'rgba(10, 37, 51, 0.1)',
  borderGrey: 'rgb(209,213,219)',
  borderGreyDark: 'rgb(156,163,175)',
};

export const ScreenSizes = {
  sm: 640,
  lg: 1024,
};
