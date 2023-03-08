import styled from "styled-components";
import { TThemeProps } from "../../styles/theme";

export const Box = styled.div`
  width: 100%;
  min-height: 7.5rem;
  margin: 8px;
  padding: 8px;
  border: 1px solid red;
  border-radius: 12px;
  box-shadow: 2px 2px 10px #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 4px solid;
  overflow: hidden;
  box-shadow: 2px 2px 10px #333;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const CharInfoBox = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 4px; */
`;

export const CharName = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CharHouse = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const CharAncestry = styled.div`
  margin-top: 6px;
  display: inline-block;
  padding: 2px 6px;
  border: 1px solid red;
  border-radius: 12px;
  & em {
    font-size: 0.75rem;
    text-transform: capitalize;
    font-style: italic;
  }
`;

export const CharWandInfo = styled.div``;
