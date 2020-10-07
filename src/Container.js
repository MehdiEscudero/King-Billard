import React from "react";
import "./style/container.css";
import homepage from "./images/homepage.svg";
import Section from "./Section";

class Container extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="filtre"></div>

          <div className="slogan">
            KING BILLARD PLUS Q’UN JEU, UNE COMMUNAUTE.
          </div>
          <div className="test">
            <img className="image" src={homepage} alt="homepage" />
          </div>
          <div className="title">QUI SOMMES-NOUS ?</div>
          <Section />
          <div className="types">LES TYPES DE JEUX</div>
        </div>
      </div>
    );
  }
}

export default Container;
