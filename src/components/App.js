import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Contents from "./Contents";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Contents />
      </Router>
    </ThemeProvider>
  );
}

export default App;
