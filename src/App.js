import React from "react";
import Corner from "./Corner";
import Beer from "./Beer";
import Fratrie from "./Fratrie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./Container";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/corner">
            <Corner />
          </Route>
          <Route path="/beer">
            <Beer />
          </Route>
          <Route path="/fratrie">
            <Fratrie />
          </Route>
          <Route path="/">
            <Container />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
