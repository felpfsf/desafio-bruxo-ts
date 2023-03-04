export type TBreakpoints = {
  breakpoints: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopL: string;
  };

  devices: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopL: string;
  };
};

export type TColors = {
  Gryffindor: string;
  GryffindorAccent: string;
  Slytherin: string;
  SlytherinAccent: string;
  Ravenclaw: string;
  RavenclawAccent: string;
  Hufflepuff: string;
  HufflepuffAccent: string;
  default: string;
  paragraph: string;
  background: string;
};

export type TFontSizes = {
  small: string;
  normal: string;
  large: string;
  xlarge: string;
};

export type TCustomThemeProps = {
  text: string;
  fontSize: string;
  background: string;
};

export type TThemeProps = TBreakpoints &
  TColors &
  TFontSizes &
  TCustomThemeProps;
