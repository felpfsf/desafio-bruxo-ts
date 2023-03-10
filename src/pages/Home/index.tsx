import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { useAppContext } from "../../hooks/useDataStore";
import { useFetchData } from "../../hooks/useFetch";
import { CharacterProps } from "../../types";
import { API_URL } from "../../utils/env";
import { CharacterList, Container, ShowMore } from "./style";

export const Home = () => {
  const [charactersToShow, setCharactersToShow] = useState(10);
  const { filters } = useAppContext();
  const { data: characters, status } = useFetchData<CharacterProps[]>(API_URL);
  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterProps[]
  >([]);
  const handleShowMore = () => {
    setCharactersToShow((prev) => prev + 10);
  };
  const isLastPage = charactersToShow >= filteredCharacters.length;

  useEffect(() => {
    if (characters) {
      const filtered = characters.filter((character) => {
        if (filters.house && character.house !== filters.house) {
          return false;
        }
        if (filters.ancestry && character.ancestry !== filters.ancestry) {
          return false;
        }
        if (
          filters.name &&
          !character.name.toLowerCase().includes(filters.name)
        ) {
          return false;
        }
        return true;
      });
      setFilteredCharacters(filtered);
    }
  }, [filters, characters]);

  if (status === "loading") {
    return <Loading />;
  }
  return (
    <Container>
      <CharacterList>
        {filteredCharacters.length ? (
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
