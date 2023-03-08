import { useState } from "react";
import { CharacterProps } from "../../types";
import {
  Avatar,
  Box,
  CharName,
  CharHouse,
  CharInfoBox,
  Content,
  CharAncestryBadge,
  CharWandInfo,
} from "./style";

export const CharacterCard = ({
  name,
  ancestry,
  alive,
  wand,
  house,
  image,
}: CharacterProps) => {
  const capitalize = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const core = wand.core && capitalize(wand.core);
  return (
    <Box house={house}>
      <Avatar house={house}>
        <img
          src={image ? image : "/images/wizard.png"}
          alt={`Foto de ${name}`}
        />
      </Avatar>
      <Content>
        <CharInfoBox>
          <CharName>{name}</CharName>
          <CharHouse>{house}</CharHouse>
          <CharAncestryBadge>
            <em>{ancestry ? ancestry : "Ancestralidade desconhecida"}</em>
          </CharAncestryBadge>
        </CharInfoBox>
        <CharWandInfo>
          Varinha
          <ul>
            <li>
              Madeira: <span>{wand.wood ? wand.wood : "Não consta"}</span>
            </li>
            <li>
              Núcleo: <span>{wand.core ? core : "Não consta"}</span>
            </li>
            {/* Criar uma função que converte para centímetros */}
            <li>
              Comprimento:{" "}
              <span>{wand.length ? wand.length : "Não consta"}</span>
            </li>
          </ul>
        </CharWandInfo>
      </Content>
    </Box>
  );
};
