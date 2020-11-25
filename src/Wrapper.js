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
      header: false,
    };
    this.handleModal = this.handleModal.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  handleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  onScroll(evt) {
    console.log(evt.nativeEvent.target.scrollTop);
    if (evt.nativeEvent.target.scrollTop > 763) {
      this.setState({ header: true });
    } else {
      this.setState({ header: false });
    }
  }

  render() {
    return (
      <div className="wrapperContainer">
        {this.state.modal ? <Form handleModal={this.handleModal} /> : null}
        <div className="wrapper" onScroll={this.onScroll}>
          <Header handleModal={this.handleModal} header={this.state.header} />
          {this.props.children}
          <Footer handleModal={this.handleModal} />
        </div>
      </div>
    );
  }
}

export default Wrapper;
