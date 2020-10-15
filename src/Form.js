import React from "react";
import "./style/form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="top">
          <div>Nous contacter</div>
          <button>X</button>
        </div>
        <div className="details">
          <div>Nom</div>
          <input></input>
          <div>Email</div>
          <input></input>
          <div>Téléphone</div>
          <input></input>
          <div>Message</div>
          <textarea></textarea>
        </div>
        <button className="send">Envoyer</button>
      </div>
    );
  }
}

export default Form;
