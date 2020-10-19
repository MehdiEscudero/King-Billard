import React from "react";
import "./style/wrapper.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    console.log("YOOO");
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header handleModal={this.handleModal} />
        <Container handleModal={this.handleModal} modal={this.state.modal} />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
