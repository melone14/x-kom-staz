import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
// import { Counter } from "./features/counter/Counter";
import { Home } from "./pages/Home";
import { Reservation } from "./pages/Reservation";
import { Summary } from "./pages/Summary";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
