import React from "react";
import "./style/section.css";



class Section extends React.Component {

  render() {

    return (


      <div className="section">
        <img className="corner" src={this.props.element.img} alt="corner" />
        <div className="subtitle">{this.props.element.subtitle}</div>
        <div className="article">{this.props.element.article} </div>
      </div>

    );

  }
}

export default Section;
