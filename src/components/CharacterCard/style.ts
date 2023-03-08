import styled from "styled-components";
import { TThemeProps } from "../../styles/theme";

interface CharacterCardProps {
  house: string;
}

export const Box = styled.div<CharacterCardProps>`
  width: 100%;
  min-height: 7.5rem;
  margin: 8px;
  padding: 8px;
  border-radius: 12px;
  background: ${({ theme, house }) =>
    theme.houseColors[house] || theme.houseColors.default};
  box-shadow: 2px 2px 10px #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 18.75rem;
    height: 25rem;
    padding-block: 0.5rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Avatar = styled.div<CharacterCardProps>`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 4px solid;
  border-color: ${({ theme, house }) =>
    theme.houseColors[`${house}Accent`] || theme.houseColors.default};
  overflow: hidden;
  box-shadow: 2px 2px 10px #333;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    width: 210px;
    height: 280px;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const CharInfoBox = styled.div`
  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
  }
`;

export const CharName = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

export const CharHouse = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const CharAncestryBadge = styled.div`
  margin-top: 6px;
  display: inline-block;
  padding: 2px 6px;
  border-radius: 12px;
  border: 1px solid black;
  background-color: #a97947; //#4d4d4d para animais
  & em {
    font-size: 0.75rem;
    text-transform: capitalize;
    font-style: italic;
  }
`;

export const CharWandInfo = styled.div`
  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
