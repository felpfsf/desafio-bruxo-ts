import { useContext } from "react";
import { DataContext, DataContextType } from "../context/DataContext";

export const useDataContext = (): DataContextType => useContext(DataContext);
