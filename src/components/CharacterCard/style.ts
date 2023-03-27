import styled from "styled-components";

interface TColors {
  Gryffindor: string;
  GryffindorAccent: string;
  Slytherin: string;
  SlytherinAccent: string;
  Ravenclaw: string;
  RavenclawAccent: string;
  Hufflepuff: string;
  HufflepuffAccent: string;
  default: string;
}

interface CharacterCardProps {
  house: string;
}

export const Box = styled.div<CharacterCardProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 7.5rem;
  margin: 8px;
  padding: 8px 8px 0;
  border-radius: 12px;
  border: 2px solid;
  border-color: ${({ theme, house }) =>
    theme.colors.houseColors[`${house}Accent`] ||
    theme.colors.houseColors.default};
  background: ${({ theme, house }) =>
      theme.colors.houseColors[house] || theme.colors.houseColors.default}
    linear-gradient(to top, #111 10%, transparent 90%);
  box-shadow: 2px 2px 10px #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 17rem;
    height: 25rem;
    padding: 8px 0 0;
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
  @media ${({ theme }) => theme.breakpoints.tablet} {
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
    theme.colors.houseColors[`${house}Accent`] ||
    theme.colors.houseColors.default};
  overflow: hidden;
  box-shadow: 2px 2px 10px #333;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 60%;
    height: 70%;
  }
`;

export const Content = styled.article`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    align-items: center;
  }
`;

export const CharInfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    align-items: center;
  }
`;

export const CharName = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.title};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const CharHouseBadge = styled.div<CharacterCardProps>`
  margin-top: 4px;
  padding: 6px 12px;
  background-color: ${({ theme, house }) =>
    theme.colors.houseColors[`${house}Accent`] ||
    theme.colors.houseColors.default};
  border-radius: 24px;
  box-shadow: 2px 2px 10px #333;
  & span {
    font-family: ${({ theme }) => theme.fontFamilies.badges};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-weight: 600;
  }
`;

export const CharAncestryBadge = styled.div`
  margin-top: 6px;
  padding: 2px 6px;
  border-radius: 12px;
  background-color: #c1865a; //#4d4d4d para animais
  box-shadow: 2px 2px 10px #333;
  display: inline-block;
  & em {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    color: #111;
    font-weight: 400;
    text-transform: capitalize;
    font-style: italic;
  }
`;

export const Divider = styled.img`
  width: 100%;
  height: 18px;
  align-self: center;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
    height: 100%;
  }
`;

export const CharWandInfo = styled.div`
  padding-bottom: 8px;
  & p {
    font-family: ${({ theme }) => theme.fontFamilies.subTitle};
    text-align: center;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
  }
`;

export const WandInfoList = styled.ul`
  padding-inline: 8px;
  font-family: ${({ theme }) => theme.fontFamilies.paragraph};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 700;
  text-transform: capitalize;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WandInfoListItem = styled.li`
  text-align: center;
  & span {
    font-weight: 400;
    display: inline-block;
  }
`;
