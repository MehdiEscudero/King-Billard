import React from "react";
import "./style/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
          <div className="title">KING BILLARD.</div>
          <div className="address">7 rue Eugène Millon</div>
          <div className="adresses">75015 Paris</div>
        </div>
        <div className="button">CONTACT</div>
        <div className="test">Test ici pour l'instant</div>
      </div>
    );
  }
}

export default Footer;
