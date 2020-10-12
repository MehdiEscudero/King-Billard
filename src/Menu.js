import React from "react";

class Menu extends React.Component {
  render() {
    const { handleVisibility, visibility, element } = this.props;
    const { titre, description, id } = element;

    return (
      <div className="gameLeft">
        <div className="names" onClick={() => handleVisibility(id)}>
          {titre}
        </div>
        <div className="games">{visibility && description}</div>
      </div>
    );
  }
}

export default Menu;
