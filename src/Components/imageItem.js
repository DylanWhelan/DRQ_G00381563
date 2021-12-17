import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

import DumbPixel from "./dumbPixel";

export class ImageItem extends Component {
    constructor(){
        super();
        
        // deleteImage is bound here
        this.deleteImage = this.deleteImage.bind(this);
    }


    // This is function that creates the set of pixels that represents the image stored.
    createImage() {
        // This is the array that will be returned to the html.

        // As we are dealing with a one dimensional array, and the grid will deal with the width of the image, we can create all the pixels in one loop
        let imageToReturn = [];
        for (let x = 0; x < this.props.image.canvasSize * this.props.image.canvasSize; x++) {
            // The colour is derived from the artArray
            imageToReturn.push(<DumbPixel key={this.props._id + " " + x} colour={this.props.image.artArray[x]} />);
        }
        return imageToReturn;
    }

    // When this is pressed a delete request will be sent to the server by axios along with the id of the specific image
    deleteImage(){
        axios.delete("http://localhost:4000/api/movies/"+this.props.image._id)
        .then()
        .catch();
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
                        <Link to={"/modify/" + this.props.image._id} className="btn btn-primary">Modify this image</Link>
                        <Button variant="danger" onClick={this.deleteImage}>Delete this image</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}