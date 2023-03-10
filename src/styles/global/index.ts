import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
${reset}
body {
  font-family: ${({ theme }) => theme.paragraph};
  color: ${({ theme }) => theme.themeColors.paragraph};
  font-size: ${({ theme }) => theme.normal};
  width:100%;
  /* background-color: ${({ theme }) => theme.background}; */
  /* background: linear-gradient(0deg, rgba(28,29,31,1) 0%, rgba(14,26,64,1) 35%, rgba(51,51,51,1) 100%); */
  background: linear-gradient(0deg,
    ${({ theme }) => theme.themeColors.background} 0%, 
    ${({ theme }) => theme.houseColors.Ravenclaw} 35%, 
    ${({ theme }) => theme.themeColors.footerBg} 100%
  );
}
`;
