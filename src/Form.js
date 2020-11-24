import React from "react";
import "./style/form.css";
import ReactDOM from "react-dom";
import check from "./images/check.svg";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      email: "",
      phoneNumber: "",
      message: "",
      sent: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event, state) {
    this.setState({
      [state]: event.target.value,
    });
  }

  onSubmit() {
    // alert(
    //   `nom: ${this.state.nom} email: ${this.state.email} phone: ${this.state.phoneNumber} message: ${this.state.message}`
    // );
    this.setState({
      sent: true,
    });
    setTimeout(() => {
      this.setState({
        nom: "",
        email: "",
        phoneNumber: "",
        message: "",
        sent: false,
      });
    }, 3000);
  }

  render() {
    const isDisabled =
      !this.state.nom ||
      !this.state.email ||
      !this.state.phoneNumber ||
      !this.state.message;
    return ReactDOM.createPortal(
      <form method="dialog" onSubmit={this.onSubmit} className="formWrapper">
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
            <div>
              <div className="label">Nom</div>
              <input
                value={this.state.nom}
                className="input"
                onChange={(event) => this.handleChange(event, "nom")}
              ></input>
            </div>
            <div>
              <div className="label">Email</div>
              <input
                value={this.state.email}
                type="email"
                className="input"
                onChange={(event) => this.handleChange(event, "email")}
              ></input>
            </div>
            <div>
              <div className="label">Téléphone</div>
              <input
                value={this.state.phoneNumber}
                type="tel"
                pattern="[0-9]{10}"
                className="input"
                onChange={(event) => this.handleChange(event, "phoneNumber")}
              ></input>
            </div>
            <div>
              <div className="label">Message</div>
              <textarea
                value={this.state.message}
                className="area"
                onChange={(event) => this.handleChange(event, "message")}
              ></textarea>
            </div>

            {this.state.sent ? (
              <button className="send sent">
                Envoyé
                <img className="check" src={check} alt="check" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isDisabled}
                className={isDisabled ? "send disabled" : "send enable"}
              >
                Envoyer
              </button>
            )}
          </div>
        </div>
      </form>,
      document.getElementById("modal")
    );
  }
}

export default Form;
