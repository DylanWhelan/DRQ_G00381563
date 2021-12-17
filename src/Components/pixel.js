import { Component } from "react";

import "../styles.css";

class Pixel extends Component {
    constructor(props){
        super(props);

        this.state = {colour: "#FFFFFF"};
        this.returnKey = this.returnKey.bind(this);
    }

    returnKey(event) {
        this.props.logIndex(this.props.index);
        this.setState({colour: this.props.newColour});
    }

    render() {
        return (
            <div className="pixel" onClick={this.returnKey} style={{backgroundColor: this.state.colour}}/>
        )
    }
}

export default Pixel;