import { useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { CharacterList, Container, ShowMore } from "./style";
import { useDataContext } from "../../hooks/useDataContext";

export const Home = () => {
  const { filteredCharacters } = useDataContext();
  const [charactersToShow, setCharactersToShow] = useState(10);
  const handleShowMore = () => {
    setCharactersToShow((prev) => prev + 10);
  };
  const isLastPage =
    filteredCharacters && charactersToShow >= filteredCharacters.length;

  return (
    <Container>
      <CharacterList>
        {filteredCharacters && filteredCharacters.length ? (
          filteredCharacters
            .slice(0, charactersToShow)
            .map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))
        ) : (
          <NotFound />
        )}
      </CharacterList>
      <ShowMore
        onClick={handleShowMore}
        disabled={isLastPage}
        isLastPage={isLastPage}
      >
        {!isLastPage ? "Exibir mais" : "Sem mais personagens"}
      </ShowMore>
    </Container>
  );
};
