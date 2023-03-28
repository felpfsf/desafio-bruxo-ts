import { CharacterProps } from "../../types";
import { useCapitalizeWord, useConvertInchToCm } from "../../utils";
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
  const { name, ancestry, wand, house, image, species, gender, wizard } = props;

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
                      Núcleo:{" "}
                      <span>
                        {wand.core
                          ? useCapitalizeWord(wand?.core)
                          : "Não consta"}
                      </span>
                    </WandInfoListItem>
                    <WandInfoListItem>
                      Comprimento:{" "}
                      <span>
                        {wand.length
                          ? useConvertInchToCm(wand.length) + "cm"
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
