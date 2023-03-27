import styled from "styled-components";

export const Container = styled.main`
  max-width: 1740px;
  width: 100%;
  margin: auto;
  padding-bottom: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const CharacterList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ShowMore = styled.button<{ isLastPage: boolean }>`
  font-family: ${({ theme }) => theme.fontFamilies.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.themeColors.paragraph};
  text-decoration: underline;
  text-underline-offset: 8px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: ${({ isLastPage }) => (isLastPage ? "none" : "flex")};
  &:hover {
    color: ${({ theme }) => theme.colors.houseColors.RavenclawAccent};
  }
`;
