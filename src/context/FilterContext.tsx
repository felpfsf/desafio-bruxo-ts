import { createContext, ReactNode, useState } from "react";

interface Filters {
  ancestry?: string;
  house?: string;
  name?: string;
}

export interface FilterContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  filters: {},
  setFilters: () => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({});
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
