import React from "react";
import "./style/form.css";

class Form extends React.Component {
  state = {
    nom: null,
    email: null,
    téléphone: null,
    message: null,
  };

  handleChange(event, state) {
    this.setState({
      [state]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("ici");
    console.log(this.state);
    alert(
      this.state.nom +
        "  " +
        this.state.email +
        "  " +
        this.state.téléphone +
        "  " +
        this.state.message
    );
  }
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
            <div className="names">Nom</div>
            <input
              onChange={(event) => this.handleChange(event, "nom")}
            ></input>
            <div className="names">Email</div>
            <input
              onChange={(event) => this.handleChange(event, "email")}
            ></input>
            <div className="names">Téléphone</div>
            <input
              onChange={(event) => this.handleChange(event, "téléphone")}
            ></input>
            <div className="names">Message</div>
            <textarea
              onChange={(event) => this.handleChange(event, "message")}
            ></textarea>
          </div>
          <button
            disabled={
              !this.state.player ||
              !this.state.billard ||
              !this.state.pseudo ||
              !this.state.email ||
              !this.state.comment
            }
            onClick={(event) => this.handleSubmit(event)}
            className="send"
          >
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
