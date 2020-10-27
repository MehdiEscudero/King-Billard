import React, { Component } from "react";
import "./style/newsletterForm.css";

class NewsletterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="news">
        <input
          placeholder="Inscrire son e-mail"
          className="inscription"
        ></input>
        <button className="attente">M'INSCRIRE SUR LA LISTE D'ATTENTE</button>
      </div>
    );
  }
}

export default NewsletterForm;
