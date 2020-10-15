import React from "react";
import Wrapper from "./Wrapper";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Wrapper />
      </Router>
    );
  }
}

export default App;
