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
      <div className={this.state.modal ? "wrapper no-overflow" : "wrapper"}>
        {this.state.modal ? <Form handleModal={this.handleModal} /> : null}
        <Header handleModal={this.handleModal} />
        <div className="child">{this.props.children}</div>
        <Footer handleModal={this.handleModal} />
      </div>
    );
  }
}

export default Wrapper;
