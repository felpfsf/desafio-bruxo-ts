import { useContext } from "react";
import { FilterContext, FilterContextProps } from "../context/FilterContext";

export const useFilterContext = (): FilterContextProps =>
  useContext(FilterContext);
