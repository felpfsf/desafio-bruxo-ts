import { useState } from "react";
import { CharacterProps } from "../../types";
import {
  Avatar,
  Box,
  CharName,
  CharInfoBox,
  Content,
  CharAncestryBadge,
  CharWandInfo,
  Corner,
  CharHouseBadge,
  Divider,
} from "./style";

export const CharacterCard = (props: CharacterProps) => {
  const { name, ancestry, alive, wand, house, image } = props;

  const capitalize = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const core = wand.core && capitalize(wand.core);

  return (
    <Box house={house}>
      {house && (
        <Corner>
          <img src={`/images/${house.toLowerCase()}_top_left.webp`} alt='' />
          <img
            src={`/images/${house.toLowerCase()}_bottom_right.webp`}
            alt=''
          />
        </Corner>
      )}
      <Avatar house={house}>
        <img
          src={image ? image : "/images/wizard.png"}
          alt={`Foto de ${name}`}
        />
      </Avatar>
      <Content>
        <CharInfoBox>
          <CharName>{name}</CharName>
          <CharHouseBadge house={house}>
            <span>{house ? house : "Não possui casa"}</span>
          </CharHouseBadge>
          <CharAncestryBadge>
            <em>{ancestry ? ancestry : "Ancestralidade desconhecida"}</em>
          </CharAncestryBadge>
        </CharInfoBox>
        <Divider src='/images/rule.png' alt='' />
        <CharWandInfo>
          <p>Varinha</p>
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
