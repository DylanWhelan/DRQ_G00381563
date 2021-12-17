import { Component } from "react";

class DumbPixel extends Component {
    constructor(props){
        super(props);

        this.state = {colour: this.props.colour};
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.colour, border: "1px solid Black"}}/>
        )
    }
}

export default DumbPixel;