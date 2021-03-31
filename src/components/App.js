import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Contents from "./Contents";
import Table from "./Table";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Contents />
          </Route>
          <Route exact path="/table">
            <Table />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
