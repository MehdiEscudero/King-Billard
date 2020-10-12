import React from "react";
import "./style/games.css";

class Games extends React.Component {
  render() {
    return (
      <div className="gameRight">
        <img
          className="paintings"
          src={this.props.element.pic}
          alt="billards"
        />
        <div className="paintor">{this.props.element.photographer}</div>
      </div>
    );
  }
}

export default Games;
