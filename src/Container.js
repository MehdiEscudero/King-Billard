import React from "react";
import "./style/container.css";
import homepage from "./images/homepage.svg";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="image" src={homepage} alt="homepage" />
      </div>
    );
  }
}

export default Container;
