import React from "react";
import Article from "./Article";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import data from "./billards.json";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/corner">
            <Article element={data[0]} />
          </Route>
          <Route path="/beer">
            <Article element={data[1]} />
          </Route>
          <Route path="/fratrie">
            <Article element={data[2]} />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
