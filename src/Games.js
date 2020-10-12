import React from "react";
import "./style/games.css";

class Games extends React.Component {
    render() {
        return (
            <div className="gamesContainer">
                <div className="gameLeft">
                <div className="names">{this.props.names}</div>
                <div className="games">{this.props.games}</div>
                </div>
                <div className="gameRight">
                <img className="paintings" src={this.props.paintings} alt="billards" />
                <div className="paintor">{this.props.paintor}</div>
                </div>
            </div>

        )
    }
}

export default Games;