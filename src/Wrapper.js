import React from "react";
import "./style/wrapper.css";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
