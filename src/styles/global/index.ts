import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
${reset}
body {
  font-family: ${({ theme }) => theme.fontFamilies.paragraph};
  color: ${({ theme }) => theme.colors.themeColors.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  width:100%;
  background: linear-gradient(0deg,
    ${({ theme }) => theme.colors.themeColors.background} 0%, 
    ${({ theme }) => theme.colors.houseColors.Ravenclaw} 35%, 
    ${({ theme }) => theme.colors.themeColors.footerBg} 100%
  );
}
`;