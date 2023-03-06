import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import {
  DropdownBox,
  DropdownItem,
  SelectButtonLabel,
  SelectContainer,
} from "./style";
export const HOUSE_OPTIONS = [
  { id: 1, value: "all", label: "Todas as casas" },
  { id: 2, value: "Gryffindor", label: "Gryffindor" },
  { id: 3, value: "Slytherin", label: "Slytherin" },
  { id: 4, value: "Ravenclaw", label: "Ravenclaw" },
  { id: 5, value: "Hufflepuff", label: "Hufflepuff" },
];
export const CustomSelect = () => {
  const [open, setOpen] = useState(false);
  const [changeValue, setChangeValue] = useState<string>("");
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleChange = (value: string, label: string) => {
    console.log(value, label);
    setChangeValue(value);
    setOpen(false);
  };
  return (
    <SelectContainer>
      <SelectButtonLabel onClick={handleOpen}>
        {changeValue === "" ? "Casa" : <span>{changeValue}</span>}{" "}
        {!open ? <RxCaretUp size={18} /> : <RxCaretDown size={18} />}
      </SelectButtonLabel>
      <DropdownBox isVisible={open}>
        {HOUSE_OPTIONS.map((option) => (
          <DropdownItem
            key={`${option.id}_${option.value}`}
            onClick={() => handleChange(option.value, option.label)}
          >
            <span>{option.label}</span>
          </DropdownItem>
        ))}
      </DropdownBox>
    </SelectContainer>
  );
};
