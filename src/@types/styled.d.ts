// import original module declarations
import "styled-components";
import { TThemeProps } from "../styles/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends TThemeProps {}
}
