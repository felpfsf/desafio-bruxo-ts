import styled from "styled-components";

export const Container = styled.header`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.themeColors.navbarBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  & nav {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  /* width: 100%; */
  /* align-self: center; */
  @media ${({ theme }) => theme.devices.tablet} {
    /* width: 25%; */
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
