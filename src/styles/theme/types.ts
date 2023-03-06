export type TBreakpoints = {
  breakpoints: Record<string, string>;
  devices: Record<string, string>;
};

export type TColors = {
  houseColors: Record<string, string>;
  themeColors: Record<string, string>;
};

export interface TFontSizes {
  small: string;
  normal: string;
  large: string;
  xlarge: string;
}

export type TCustomThemeProps = {
  text: string;
  fontSize: string;
  background: string;
};

export type TThemeProps = TBreakpoints &
  TColors &
  TFontSizes &
  TCustomThemeProps;
