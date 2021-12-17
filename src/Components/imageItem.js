import { Component } from "react";
import { Card } from "react-bootstrap";

import DumbPixel from "./dumbPixel";

export class ImageItem extends Component {

    createImage() {
        let imageToReturn = [];
        for (let x = 0; x < this.props.image.canvasSize * this.props.image.canvasSize; x++) {
            console.log(x);
            imageToReturn.push(<DumbPixel key={this.props._id + " " + x} colour={this.props.image.artArray[x]} />);
        }
        return imageToReturn;
    }


    render() {
        return (
            <div>
                <Card>
                    <Card.Header>By {this.props.image.author}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.image.artTitle}</Card.Title>
                        <Card.Text>
                            <div style={{ display: "grid", gridTemplate: `repeat(${this.props.image.canvasSize}, 1fr) / repeat(${this.props.image.canvasSize}, 1fr)`, aspectRatio: "1 / 1", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
                                {this.createImage()}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}