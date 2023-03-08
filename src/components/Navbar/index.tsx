import { useAppContext } from "../../hooks/useDataStore";
import { ANCESTRY_OPTIONS, HOUSE_OPTIONS } from "../../utils";
import { CustomSelect } from "../CustomSelect";
import { NavbarContainer } from "./style";
export const Navbar = () => {
  const { filters, setFilters } = useAppContext();
  const handleChangeValue = (filterType: string, value: string) => {
    switch (filterType) {
      case "house":
        setFilters({ ...filters, house: value });
        break;
      case "ancestry":
        setFilters({ ...filters, ancestry: value });
        break;
      default:
        return;
    }
  };
  return (
    <NavbarContainer>
      <h1>Desafio Bruxo</h1>
      <nav>
        <CustomSelect
          options={HOUSE_OPTIONS}
          currentValue={filters.house || ""}
          id='house'
          handleChangeValue={(value: string) =>
            handleChangeValue(value, "house")
          }
        />
        <CustomSelect
          options={ANCESTRY_OPTIONS}
          currentValue={filters.ancestry || ""}
          id='ancestry'
          handleChangeValue={(value: string) =>
            handleChangeValue(value, "ancestry")
          }
        />
      </nav>
    </NavbarContainer>
  );
};
