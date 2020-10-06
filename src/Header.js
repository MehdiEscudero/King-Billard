import React from "react";
import "./style/header.css";
import logo from "./images/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="title">KING BILLARD.</div>
        <div>ACCUEIL</div>
        <div>QUI SOMMES-NOUS ?</div>
        <div>LES TYPES DE JEUX</div>
        <button className="button">CONTACT</button>
      </div>
    );
  }
}

export default Header;
