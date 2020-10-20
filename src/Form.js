import React from "react";
import "./style/form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="formWrapper">
        <div onClick={() => this.props.handleModal()} className="fond"></div>
        <div className="form">
          <div className="top">
            <div className="contacter">Nous contacter</div>
            <button onClick={() => this.props.handleModal()} className="croix">
              X
            </button>
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
      </div>
    );
  }
}

export default Form;
