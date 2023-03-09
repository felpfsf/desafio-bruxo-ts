import styled from "styled-components";

interface CharacterCardProps {
  house: string;
}

export const Box = styled.div<CharacterCardProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 7.5rem;
  margin: 8px;
  padding: 8px;
  border-radius: 12px;
  border: 2px solid;
  border-color: ${({ theme, house }) =>
    theme.houseColors[`${house}Accent`] || theme.houseColors.default};
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

export const Corner = styled.div`
  position: absolute;
  z-index: 0;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & img {
    width: 20%;
  }
  & img:nth-child(2) {
    align-self: flex-end;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    & img {
      width: 45%;
    }
  }
`;

export const Avatar = styled.div<CharacterCardProps>`
  width: 96px;
  height: 96px;
  z-index: 0;
  border-radius: 50%;
  border: 4px solid;
  border-color: ${({ theme, house }) =>
    theme.houseColors[`${house}Accent`] || theme.houseColors.default};
  overflow: hidden;
  box-shadow: 2px 2px 10px #333;
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    width: 210px;
    height: 280px;
  }
`;

export const Content = styled.article`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const CharInfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
    align-items: center;
  }
`;

export const CharName = styled.h1`
  font-size: ${({ theme }) => theme.large};
  font-weight: 600;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.xl};
  }
`;

export const CharHouseBadge = styled.div<CharacterCardProps>`
  margin-top: 4px;
  padding: 6px 12px;
  background-color: ${({ theme, house }) =>
    theme.houseColors[`${house}Accent`]};
  border-radius: 24px;
  box-shadow: 2px 2px 10px #333;
  & span {
    font-size: ${({ theme }) => theme.normal};
    font-weight: 600;
  }
`;

export const CharAncestryBadge = styled.div`
  margin-top: 6px;
  display: inline-block;
  padding: 2px 6px;
  border-radius: 12px;
  background-color: #c1865a; //#4d4d4d para animais
  box-shadow: 2px 2px 10px #333;
  & em {
    font-size: ${({ theme }) => theme.xsmall};
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
