import React from "react";
import "./style/header.css";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div
        className={this.props.header ? "header-black" : "header-transparent"}
      >
        <Link to="/">
          <div className="identity">
            <img src={logo} alt="logo" className="logo zindex" />
            <div className="name">KING BILLARD.</div>
          </div>
        </Link>
        <div className="onglet zindex">
          <Link to="/">
            <div className="tab">ACCUEIL</div>
          </Link>
          <div className="tab">QUI SOMMES-NOUS ?</div>
          <div className="tab">LES TYPES DE JEUX</div>
          <button onClick={() => this.props.handleModal()} className="button">
            CONTACT
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
