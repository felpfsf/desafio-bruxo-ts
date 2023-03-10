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
  WandInfoList,
  WandInfoListItem,
} from "./style";

export const CharacterCard = (props: CharacterProps) => {
  const { name, ancestry, alive, wand, house, image, species, gender, wizard } =
    props;

  const capitalize = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const core = wand.core && capitalize(wand.core);

  const convertInchToCm = (length: number | null) => {
    const BASE_VALUE = 2.54;
    const lenghCm = length && length * BASE_VALUE;
    return lenghCm?.toFixed(2);
  };

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
          src={
            image
              ? image
              : wizard
              ? "/images/wizard.png"
              : gender === "male"
              ? "/images/generic_male.png"
              : "/images/generic_female.png"
          }
          alt={`Foto de ${name}`}
        />
      </Avatar>
      <Content>
        <CharInfoBox>
          <CharName>{name}</CharName>
          {/* {species !== "human" && <h2>{species}</h2>} */}
          <CharHouseBadge house={house}>
            <span>{house ? house : "Não possui casa"}</span>
          </CharHouseBadge>
          <CharAncestryBadge>
            <em>{ancestry ? ancestry : "Ancestralidade desconhecida"}</em>
          </CharAncestryBadge>
        </CharInfoBox>
        <Divider src='/images/rule.png' alt='' />
        <CharWandInfo>
          {ancestry.toLowerCase() !== "muggle" ? (
            <>
              <p>Varinha</p>
              <WandInfoList>
                {wand.wood != "" || wand.core != "" || wand.length != null ? (
                  <>
                    <WandInfoListItem>
                      Madeira:{" "}
                      <span>{wand.wood ? wand.wood : "Não consta"}</span>
                    </WandInfoListItem>
                    <WandInfoListItem>
                      Núcleo: <span>{wand.core ? core : "Não consta"}</span>
                    </WandInfoListItem>
                    <WandInfoListItem>
                      Comprimento:{" "}
                      <span>
                        {wand.length
                          ? convertInchToCm(wand.length) + "cm"
                          : "Não consta"}
                      </span>
                    </WandInfoListItem>
                  </>
                ) : (
                  <WandInfoListItem>
                    "Não Possui dados da varinha"
                  </WandInfoListItem>
                )}
              </WandInfoList>
            </>
          ) : (
            <p>"Trouxas não possuem varinha"</p>
          )}
        </CharWandInfo>
      </Content>
    </Box>
  );
};
