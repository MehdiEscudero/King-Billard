import React from "react";
import "./style/section.css";
import { Link } from "react-router-dom";

class Section extends React.Component {
  render() {
    return (
      <Link to="corner">
        <div className="section">
          <img className="corner" src={this.props.element.img} alt="corner" />
          <div className="subtitle">{this.props.element.subtitle}</div>
          <div className="article">{this.props.element.article} </div>
        </div>
      </Link>
    );
  }
}

export default Section;
