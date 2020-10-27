import React from "react";
import "./style/footer.css";
import logo from "./images/logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="info">
            <div className="place">
              <img src={logo} alt="logo" className="logoBottom" />
              <div className="name">KING BILLARD.</div>
            </div>
            <div className="address">7 rue Eugène Millon</div>
            <div className="adresses">75015 Paris</div>
          </div>
          <button onClick={() => this.props.handleModal()} className="button">
            CONTACT
          </button>
          <div className="news">
            <input
              placeholder="Inscrire son e-mail"
              className="inscription"
            ></input>
            <button className="attente">
              M'INSCRIRE SUR LA LISTE D'ATTENTE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
