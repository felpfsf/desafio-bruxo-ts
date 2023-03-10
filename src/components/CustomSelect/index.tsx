import { useEffect, useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useFilterContext } from "../../hooks/useFilterContext";
import {
  DropdownBox,
  DropdownItem,
  SelectButtonLabel,
  SelectContainer,
} from "./style";

interface OptionsProps {
  id: number;
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionsProps[];
  currentValue: string;
  handleChangeValue: (value: string) => void;
  id: string;
}
export const CustomSelect = ({
  handleChangeValue,
  id,
  options,
}: CustomSelectProps) => {
  const { filters, setFilters } = useFilterContext();
  const [open, setOpen] = useState(false);

  const [changeValue, setChangeValue] = useState<string>(() => {
    switch (id) {
      case "house":
        return filters.house || "";
      case "ancestry":
        return filters.ancestry || "";
      default:
        return "";
    }
  });

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (value: string, label: string) => {
    setChangeValue(label);
    handleChangeValue(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest(`#${id}`)) {
        handleOpen();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <SelectContainer id={id}>
      <SelectButtonLabel onClick={handleOpen}>
        {changeValue === "" ? (
          id.includes("house") ? (
            "Casa"
          ) : (
            "Ancestralidade"
          )
        ) : (
          <span>{changeValue}</span>
        )}{" "}
        {!open ? <RxCaretUp size={18} /> : <RxCaretDown size={18} />}
      </SelectButtonLabel>
      <DropdownBox isVisible={open}>
        {options.map((option) => (
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
