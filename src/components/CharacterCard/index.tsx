import {
  Avatar,
  Box,
  CharName,
  CharHouse,
  CharInfoBox,
  CharAncestry,
  Content,
} from "./style";

export const CharacterCard = () => {
  return (
    <Box>
      <Avatar>
        <img
          src='https://ik.imagekit.io/hpapi/harry.jpg'
          alt='Foto de ${name}'
        />
      </Avatar>
      <Content>
        <CharInfoBox>
          <CharName>Harry Potter</CharName>
          <CharHouse>Gryffindor</CharHouse>
          <CharAncestry>
            <em>half-blood</em>
          </CharAncestry>
        </CharInfoBox>
        <div>
          Varinha
          <ul>
            <li>
              Madeira: <span>Holly</span>
            </li>
            <li>
              Núcleo: <span>Phoenix Feather</span>
            </li>
            {/* Criar uma função que converte para centímetros */}
            <li>
              Comprimento: <span>27,94 cm</span>
            </li>
          </ul>
        </div>
      </Content>
    </Box>
  );
};
