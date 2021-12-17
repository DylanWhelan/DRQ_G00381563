import { Component } from "react";
import { Images } from "./images";


class Browse extends Component {
    constructor() {
        super();

        this.state = {
            images: [
            ]
        }
    }


    render() {
        return (
            <div>
                <h1>This is another lovely place holder ain't it?</h1>
                <Images images={this.state.images}></Images>
            </div>
        )
    }
}

export default Browse;