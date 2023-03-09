import {
  TBreakpoints,
  TColors,
  TFontFamilies,
  TFontSizes,
  TThemeProps,
} from "./types";

const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  desktopL: "2560px",
};

const devices = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`,
};

const globalBreakpoints: TBreakpoints = {
  breakpoints,
  devices,
};

const ancestryBadgeColors = {
  Pureblood: "#7b1e1e", //(deep red)
  Halfblood: "#e6b800", //(golden yellow)
  Muggleborn: "#c5c5c5", //(light grey)
  Muggle: "#3f3f3f", //(dark grey)
  Squib: "#c1865a", //(warm brown)
  Veela: "#f2c6e0", //(light pink)
};

const houseColors = {
  Gryffindor: "#740001",
  GryffindorAccent: "#D3A625",
  Slytherin: "#1A472A",
  SlytherinAccent: "#5D5D5D",
  Ravenclaw: "#0E1A40",
  RavenclawAccent: "#946B2D",
  Hufflepuff: "#fcc53c",
  HufflepuffAccent: "#6e5e52",
  default: "#7f7f7f",
};

const themeColors = {
  paragraph: "#F8F8F8 ",
  background: "#1C1D1F",
  navbarBg: "#B4B4B4",
  footerBg: "#333333 ",
};

const colors: TColors = {
  ancestryBadgeColors,
  houseColors,
  themeColors,
};

const fontSizes: TFontSizes = {
  xsmall: "0.75rem",
  small: ".875rem",
  normal: "1rem",
  large: "1.125rem",
  xl: "1.5rem",
  xxl: "2rem",
};

const fontFamilies: TFontFamilies = {
  title: "'Montserrat', sans-serif",
  subTitle: "'Rubik', sans-serif",
  paragraph: "'Work Sans', sans-serif",
  badges: "'Quicksand', sans-serif",
};

export const theme: TThemeProps = {
  ...globalBreakpoints,
  ...colors,
  ...fontSizes,
  ...fontFamilies,

  text: colors.themeColors.paragraph,
  fontSize: fontSizes.normal,
  background: colors.themeColors.background,
};
