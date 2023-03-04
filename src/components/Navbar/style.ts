import styled from "styled-components";
import { TThemeProps } from "../../styles/theme";

interface ITheme {
  theme: TThemeProps;
}

export const NavbarContainer = styled.header`
  padding: 1.5rem;
  background-color: ${({ theme }: ITheme) => theme.navbarBg};
`;
