import React from "react";
import "./style/form.css";
import ReactDOM from "react-dom";

class Form extends React.Component {
  state = {
    nom: null,
    email: null,
    phoneNumber: null,
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
        this.state.phoneNumber +
        "  " +
        this.state.message
    );
  }
  render() {
    return ReactDOM.createPortal(
      <div className="formWrapper">
        <div onClick={() => this.props.handleModal()} className="fond"></div>
        <div className="form">
          <div className="top">
            <div style={{ width: "100%" }}>
              <span style={{ textAlign: "center", width: "100%" }}>
                Nous contacter
              </span>
            </div>
            <button className="close" onClick={() => this.props.handleModal()}>
              X
            </button>
          </div>
          <div className="details">
            <div className="label">Nom</div>
            <input
              onChange={(event) => this.handleChange(event, "nom")}
            ></input>
            <div className="label">Email</div>
            <input
              onChange={(event) => this.handleChange(event, "email")}
            ></input>
            <div className="label">Téléphone</div>
            <input
              onChange={(event) => this.handleChange(event, "phoneNumber")}
            ></input>
            <div className="label">Message</div>
            <textarea
              onChange={(event) => this.handleChange(event, "message")}
            ></textarea>
          </div>
          <button
            disabled={
              !this.state.nom ||
              !this.state.email ||
              !this.state.phoneNumber ||
              !this.state.message
            }
            onClick={(event) => this.handleSubmit(event)}
            className="send"
          >
            Envoyer
          </button>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Form;
