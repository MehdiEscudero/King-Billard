import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <div className="gameLeft">
                <div className="names">{this.props.element.titre}</div>
                <div className="games">{this.props.element.description}</div>
                </div>
        )
    }
}

export default Menu;