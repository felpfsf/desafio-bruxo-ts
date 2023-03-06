import { TBreakpoints, TColors, TFontSizes, TThemeProps } from "./types";

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

const houseColors = {
  Gryffindor: "#740001",
  GryffindorAccent: "#D3A625",
  Slytherin: "#1A472A",
  SlytherinAccent: "#5D5D5D",
  Ravenclaw: "#0E1A40",
  RavenclawAccent: "#946B2D",
  Hufflepuff: "#ECB939",
  HufflepuffAccent: "#000000",
  default: "#7f7f7f",
};

const themeColors = {
  paragraph: "#F8F8F8 ",
  background: "#1C1D1F",
  navbarBg: "#B4B4B4",
  footerBg: "#333333 ",
};

const colors: TColors = {
  houseColors,
  themeColors,
};

const fontSizes: TFontSizes = {
  small: "0.75rem",
  normal: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
};

export const theme: TThemeProps = {
  ...globalBreakpoints,
  ...colors,
  ...fontSizes,

  text: colors.themeColors.paragraph,
  fontSize: fontSizes.normal,
  background: colors.themeColors.background,
};
