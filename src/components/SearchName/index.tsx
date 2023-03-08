import { ChangeEvent } from "react";
import { Input } from "./style";

interface SearchProps {
  value: string;
  handleSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}
export const SearchName = ({ handleSearch, value, id }: SearchProps) => {
  return (
    <Input
      id={id}
      type='text'
      value={value}
      placeholder='Pesquise pelo nome'
      onChange={handleSearch}
    />
  );
};
