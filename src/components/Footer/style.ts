import styled from "styled-components";
import { TThemeProps } from "../../styles/theme";

interface ITheme {
  theme: TThemeProps;
}

export const NavbarContainer = styled.footer`
  padding: 1.5rem;
  background-color: ${({ theme }: ITheme) => theme.navbarBg};
  flex-shrink: 0;
`;
