import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
