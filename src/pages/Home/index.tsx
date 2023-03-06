import { CharacterCard } from "../../components/CharacterCard";
import { CustomSelect } from "../../components/CustomSelect";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { CharacterList, Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <h1>Olá eu sou a Home page</h1>
      <CharacterList>
        {/* <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard /> */}
        {/* <NotFound /> */}
        {/* <Loading /> */}
        {/* <CustomSelect /> */}
      </CharacterList>
    </Container>
  );
};
