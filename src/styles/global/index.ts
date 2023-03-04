import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { TThemeProps } from "../theme";

interface ITheme {
  theme: TThemeProps;
}

export const GlobalStyles = createGlobalStyle`
${reset}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ theme }: ITheme) => theme.text};
  font-size: ${({ theme }: ITheme) => theme.normal};
  width:100%;
  background-color: ${({ theme }: ITheme) => theme.background};
}
`;
