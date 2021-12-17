import { Component } from "react";

class Pixel extends Component {
    constructor(props){
        super(props);

        this.state = {colour: this.props.colour};
        this.returnKey = this.returnKey.bind(this);
    }

    returnKey(event) {
        this.props.changeColour(this.props.index);
        this.setState({colour: this.props.newColour});
    }

    render() {
        return (
            <div onClick={this.returnKey} style={{backgroundColor: this.state.colour, border: "2px solid black", placeContent: "center"}}/>
        )
    }
}

export default Pixel;