import { useState } from "react";
import { ANCESTRY_OPTIONS, HOUSE_OPTIONS } from "../../utils";
import { CustomSelect } from "../CustomSelect";
import { NavbarContainer } from "./style";
export const Navbar = () => {
  const [currentHouseValue, setCurrentHouseValue] = useState("");
  return (
    <NavbarContainer>
      <h1>Desafio Bruxo</h1>
      <nav>
        <CustomSelect
          options={HOUSE_OPTIONS}
          currentValue={currentHouseValue}
          id='house-select'
          handleChangeValue=''
        />
        <CustomSelect
          options={ANCESTRY_OPTIONS}
          currentValue={currentHouseValue}
          id='ancestry-select'
          handleChangeValue=''
        />
      </nav>
    </NavbarContainer>
  );
};
