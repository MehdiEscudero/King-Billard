import React from "react";
import "./style/section.css";
import { Link } from "react-router-dom";

class Section extends React.Component {
  render() {
    return (
      <Link to={this.props.element.path} className="card">
        <div className="section-card">
          <img className="img-card" src={this.props.element.img} alt="corner" />
          <div className="title-card">{this.props.element.subtitle}</div>
          <div className="content-card">{this.props.element.article} </div>
        </div>
      </Link>
    );
  }
}

export default Section;
