export type TBreakpoints = {
  breakpoints: Record<string, string>;
  devices: Record<string, string>;
};

export type TColors = {
  houseColors: Record<string, string>;
  themeColors: Record<string, string>;
  ancestryBadgeColors: Record<string, string>;
};

export type TFontSizes = {
  xsmall: string;
  small: string;
  normal: string;
  large: string;
  xl: string;
  xxl: string;
};

export type TCustomThemeProps = {
  text: string;
  fontSize: string;
  background: string;
};

export type TFontFamilies = {
  title: string;
  subTitle: string;
  paragraph: string;
  badges: string;
};

export type TThemeProps = TBreakpoints &
  TColors &
  TFontSizes &
  TFontFamilies &
  TCustomThemeProps;
