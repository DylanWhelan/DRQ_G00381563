import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

import DumbPixel from "./dumbPixel";

export class ImageItem extends Component {
    constructor(){
        super();
        
        this.deleteImage = this.deleteImage.bind(this);
    }


    createImage() {
        let imageToReturn = [];
        for (let x = 0; x < this.props.image.canvasSize * this.props.image.canvasSize; x++) {
            imageToReturn.push(<DumbPixel key={this.props._id + " " + x} colour={this.props.image.artArray[x]} />);
        }
        return imageToReturn;
    }

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