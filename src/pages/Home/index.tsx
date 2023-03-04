import { CharacterCard } from "../../components/CharacterCard";
import { CharacterList, Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <h1>Olá eu sou a Home page</h1>
      <CharacterList>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </CharacterList>
    </Container>
  );
};
