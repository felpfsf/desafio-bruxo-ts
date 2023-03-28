import { createContext, ReactNode, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetch";
import { CharacterProps } from "../types";
import { API_URL } from "../utils/";

interface Filters {
  ancestry?: string;
  house?: string;
  name?: string;
}

type Status = "loading" | "loaded" | "error";

interface DataCtxProviderProps {
  children: ReactNode;
}

export interface DataContextType {
  characters: CharacterProps[] | undefined;
  filteredCharacters: CharacterProps[] | undefined;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  status: Status | undefined;
}

export const DataContext = createContext({
  characters: undefined,
  filteredCharacters: undefined,
  filters: {},
  setFilters: () => {},
  status: "loading",
} as DataContextType);

export const DataContextProvider = ({ children }: DataCtxProviderProps) => {
  const [filters, setFilters] = useState<Filters>({});
  const { data: characters, status } = useFetchData<CharacterProps[]>(API_URL);
  const [filteredCharacters, setFilteredCharacters] = useState<
    CharacterProps[]
  >([]);

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
    <DataContext.Provider
      value={{ characters, filteredCharacters, filters, setFilters, status }}
    >
      {children}
    </DataContext.Provider>
  );
};
