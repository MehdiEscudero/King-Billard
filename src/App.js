import React from "react";
import Wrapper from "./Wrapper";
import Corner from "./Corner";
import Beer from "./Beer";
import Fratrie from "./Fratrie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Wrapper />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
