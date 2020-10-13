import React from "react";
import "./style/menu.css";

class Menu extends React.Component {
  render() {
    const { handleVisibility, visibility, element } = this.props;
    const { titre, description, id } = element;

    return (
      <div className="gameLeft">
        <button className="names" onClick={() => handleVisibility(id)}>
          {titre}
        </button>
        <div className="games">{visibility ? description : null}</div>
      </div>
    );
  }
}

export default Menu;
