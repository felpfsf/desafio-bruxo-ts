import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { CustomSelect } from "../../components/CustomSelect";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { useAppContext } from "../../hooks/useDataStore";
import { useFetchData } from "../../hooks/useFetch";
import { CharacterProps } from "../../types";
import { API_URL } from "../../utils/env";
import { CharacterList, Container } from "./style";

export const Home = () => {
  const { filters } = useAppContext();
  const {
    data: characters,
    error,
    status,
  } = useFetchData<CharacterProps[]>(API_URL);
  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterProps[]
  >([]);
  const [charactersToShow, setCharactersToShow] = useState<number>(10);
  const handleShowMore = () => {
    setCharactersToShow((prev) => prev + 10);
  };

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

  return (
    <Container>
      <CharacterList>
        {status === "loading" && <Loading />}
        {filteredCharacters.length &&
          filteredCharacters
            .slice(0, charactersToShow)
            .map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
      </CharacterList>
      <button
        onClick={handleShowMore}
        disabled={filteredCharacters.length ? false : true}
      >
        Exibir mais
      </button>
    </Container>
  );
};
