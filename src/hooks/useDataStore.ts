import { useContext } from "react";
import { AppContext, AppContextProps } from "../context/DataContext";

export const useAppContext = (): AppContextProps => useContext(AppContext);
