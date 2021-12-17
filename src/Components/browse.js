import { Component } from "react";
import { Images } from "./images";
import axios from "axios";


class Browse extends Component {
    constructor() {
        super();

        this.state = {
            images: [
            ]
        }
    }

    // Once the component is mounted, information is requested from the server
    componentDidMount() {
        axios.get('http://localhost:4000/api/images')
            .then((response) => {
                this.setState({ images: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                {/* This creates a grid of cards representing images on the page, the rows will present a face 3 wide */}
                <div style={{ display: "grid", gridTemplateColumns: `repeat(3, 1fr)`, aspectRatio: "1 / 1", width: "80vw", marginLeft: "auto", marginRight: "auto" }}>
                    <Images images={this.state.images}></Images>
                </div>
            </div>
        )
    }
}

export default Browse;