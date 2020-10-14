import React from "react";
import "./style/header.css";
import logo from "./images/logo.svg";

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header;
