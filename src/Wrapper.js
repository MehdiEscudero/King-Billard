import React from "react";
import "./style/wrapper.css";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header handleModal={this.handleModal} />
        {this.state.modal ? <Form handleModal={this.handleModal} /> : null}
        <div className="child">{this.props.children}</div>
        {/* <Container /> */}
        <Footer handleModal={this.handleModal} />
      </div>
    );
  }
}

export default Wrapper;
