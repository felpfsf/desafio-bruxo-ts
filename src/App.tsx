import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import styled from "styled-components";
import { AppProvider } from "./context/DataContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppProvider>
        <Container>
          <Navbar />
          <Home />
          <Footer />
        </Container>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
