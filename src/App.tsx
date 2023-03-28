import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";
import styled from "styled-components";
import { FilterProvider } from "./context/FilterContext";
import { ScrollToTop } from "./components/ScrollToTopButton";
import { DataContextProvider } from "./context/DataContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ScrollToTop />
      <DataContextProvider>
        <Container>
          <Navbar />
          <Home />
          <Footer />
        </Container>
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;
