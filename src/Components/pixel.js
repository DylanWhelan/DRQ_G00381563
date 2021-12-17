import { Component } from "react";

class Pixel extends Component {
    constructor(props){
        super(props);

        // colour is the state variable representing the colour of the pixel, and return key is the bound event listener used to change colour when it is pressed
        this.state = {colour: this.props.colour};
        this.returnKey = this.returnKey.bind(this);
    }

    returnKey(event) {
        // changeColour is a method passed down from canvas
        this.props.changeColour(this.props.index);

        // colour is changed and hence so is pixel colour
        this.setState({colour: this.props.newColour});
    }

    // Inline css is used to ensure that each pixel can have it's own styling
    render() {
        return (
            <div onClick={this.returnKey} style={{backgroundColor: this.state.colour, border: "2px solid black", placeContent: "center"}}/>
        )
    }
}

export default Pixel;