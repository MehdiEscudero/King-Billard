import React from "react";
import corner from "./images/corner.svg";
import jean from "./images/jean.svg";
import logo from "./images/logo.svg";
import "./style/corner.css";

class Corner extends React.Component {
  render() {
    return (
      <div className="pageUne">
        <div className="header">
          <div className="identity">
            <img src={logo} alt="logo" className="logo" />
            <div className="name">KING BILLARD.</div>
          </div>
          <div className="onglet">
            <div className="tab">ACCUEIL</div>
            <div className="tab">QUI SOMMES-NOUS ?</div>
            <div className="tab">LES TYPES DE JEUX</div>
            <button className="button">CONTACT</button>
          </div>
        </div>
        <img src={corner} alt="corner" />
        <h3>Des passionnés du billard sous toutes ses formes</h3>
        <span>
          <img src={jean} alt="avatar" />
          <h6>Jean Lassale</h6>
        </span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </div>
      </div>
    );
  }
}

export default Corner;
