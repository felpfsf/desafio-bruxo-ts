import { useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { CharacterList, Container, ShowMore } from "./style";
import { useDataContext } from "../../hooks/useDataContext";

export const Home = () => {
  const { filteredCharacters = [], status } = useDataContext();
  const [charactersToShow, setCharactersToShow] = useState(10);
  const filteredCharactersLength = filteredCharacters.length;
  const isLastPage = charactersToShow >= filteredCharactersLength;
  if (status === "loading") return <Loading />;
  const handleShowMore = () => {
    setCharactersToShow((prev) => prev + 10);
  };
  return (
    <Container>
      <CharacterList>
        {filteredCharactersLength ? (
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
        charLength={filteredCharactersLength}
      >
        {!isLastPage ? "Exibir mais" : "Sem mais personagens"}
      </ShowMore>
    </Container>
  );
};
