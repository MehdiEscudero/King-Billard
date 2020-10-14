import React from "react";
import "./style/footer.css";
import logo from "./images/logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
          <div className="place">
            <img src={logo} alt="logo" className="logoBottom" />
            <div className="name">KING BILLARD.</div>
          </div>
          <div className="address">7 rue Eugène Millon</div>
          <div className="adresses">75015 Paris</div>
        </div>
        <div className="button">CONTACT</div>
        <div className="news">
          <input
            placeholder="      Inscrire son e-mail"
            className="inscription"
          ></input>
          <button className="attente">M'INSCRIRE SUR LA LISTE D'ATTENTE</button>
        </div>
      </div>
    );
  }
}

export default Footer;
