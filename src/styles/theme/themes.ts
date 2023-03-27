import { TColors } from "./types";

const screens = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  desktopL: "2560px",
};

const devices = {
  mobileS: `(min-width: ${screens.mobileS})`,
  mobileM: `(min-width: ${screens.mobileM})`,
  mobileL: `(min-width: ${screens.mobileL})`,
  tablet: `(min-width: ${screens.tablet})`,
  laptop: `(min-width: ${screens.laptop})`,
  desktop: `(min-width: ${screens.desktop})`,
  desktopL: `(min-width: ${screens.desktopL})`,
};

const breakpoints = {
  ...screens,
  ...devices,
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
  houseColors,
  themeColors,
};
const fontSizes = {
  xsmall: "0.75rem",
  small: ".875rem",
  normal: "1rem",
  large: "1.125rem",
  xl: "1.5rem",
  xxl: "2rem",
};

const fontFamilies = {
  title: "'Montserrat', sans-serif",
  subTitle: "'Rubik', sans-serif",
  paragraph: "'Work Sans', sans-serif",
  badges: "'Quicksand', sans-serif",
};

export const defaultTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontFamilies,
};
