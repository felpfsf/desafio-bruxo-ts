import { CharacterProps } from "../../types";
import {
  Avatar,
  Box,
  CharName,
  CharHouse,
  CharInfoBox,
  CharAncestry,
  Content,
} from "./style";

export const CharacterCard = ({
  name,
  ancestry,
  alive,
  wand,
  house,
  image,
}: CharacterProps) => {
  return (
    <Box>
      <Avatar>
        <img
          src={image ? image : "/images/wizard.png"}
          alt={`Foto de ${name}`}
        />
      </Avatar>
      <Content>
        <CharInfoBox>
          <CharName>{name}</CharName>
          <CharHouse>{house}</CharHouse>
          <CharAncestry>
            <em>{ancestry ? ancestry : "Ancestralidade desconhecida"}</em>
          </CharAncestry>
        </CharInfoBox>
        <div>
          Varinha
          <ul>
            <li>
              Madeira: <span>{wand.wood ? wand.wood : "Não consta"}</span>
            </li>
            <li>
              Núcleo: <span>{wand.core ? wand.core : "Não consta"}</span>
            </li>
            {/* Criar uma função que converte para centímetros */}
            <li>
              Comprimento:{" "}
              <span>{wand.length ? wand.length : "Não consta"}</span>
            </li>
          </ul>
        </div>
      </Content>
    </Box>
  );
};
