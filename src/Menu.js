import React from "react";



class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility:  false
        }
    }
    
    handleChange() {
        this.setState({
            visibility: true
        })
    }
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