import { createContext, ReactNode, useState } from "react";

interface Filters {
  ancestry?: string;
  house?: string;
  name?: string;
}

export interface AppContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export const AppContext = createContext<AppContextProps>({
  filters: {},
  setFilters: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({});
  return (
    <AppContext.Provider value={{ filters, setFilters }}>
      {children}
    </AppContext.Provider>
  );
};
