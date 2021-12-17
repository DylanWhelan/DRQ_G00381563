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
                <div style={{ display: "grid", gridTemplateColumns: `repeat(3, 1fr)`, aspectRatio: "1 / 1", width: "80vw", marginLeft: "auto", marginRight: "auto" }}>
                    <Images images={this.state.images}></Images>
                </div>
            </div>
        )
    }
}

export default Browse;