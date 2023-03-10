import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useDataStore";
import { ANCESTRY_OPTIONS, HOUSE_OPTIONS } from "../../utils";
import { CustomSelect } from "../CustomSelect";
import { SearchName } from "../SearchName";
import { Logo, Container } from "./style";

export const Navbar = () => {
  const { filters, setFilters } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeValue = (filterType: string, value: string) => {
    switch (filterType) {
      case "house":
        setFilters({ ...filters, house: value });
        break;
      case "ancestry":
        setFilters({ ...filters, ancestry: value });
        break;
      case "name":
        setFilters({ ...filters, name: searchTerm.toLowerCase() });
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    handleChangeValue("name", searchTerm);
  }, [searchTerm]);

  return (
    <Container>
      <Logo>
        <img src='/images/logo-black_2.webp' alt='' />
      </Logo>
      <nav>
        <CustomSelect
          options={HOUSE_OPTIONS}
          currentValue={filters.house || ""}
          id='house'
          handleChangeValue={(value: string) =>
            handleChangeValue("house", value)
          }
        />
        <CustomSelect
          options={ANCESTRY_OPTIONS}
          currentValue={filters.ancestry || ""}
          id='ancestry'
          handleChangeValue={(value: string) =>
            handleChangeValue("ancestry", value)
          }
        />
        <SearchName
          id='name'
          value={searchTerm}
          handleSearch={(e) => setSearchTerm(e.target.value)}
        />
      </nav>
    </Container>
  );
};
