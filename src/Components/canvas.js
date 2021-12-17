import { Component } from "react";
import axios from "axios";
import Pixel from "./pixel";


class Canvas extends Component {
    constructor() {
        super();

        // All the event handlers for this method are bound here, along with the changeColour callback function
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeArtTitle = this.onChangeArtTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeCurrentColour = this.onChangeCurrentColour.bind(this);
        this.changeColour = this.changeColour.bind(this);
    }
    // The state is set up here,
    // Maps are used to fill out the canvasStoredValues so that it can then be modified by the user
    state = {
        artTitle: "",
        author: "",
        canvasWidth: 6,
        currentColour: "#000000",
        canvasStoredValues: Array(6).fill(0).map(row => new Array(6).fill("#FFFF00"))
    }

    // The canvas is created here
    createCanvas() {
        // This is the array that will be returned to the html
        let canvasToReturn = [];
        // As this is to represent a 2d array, there are 2 loops, one for the x axis and one for the y axis
        for (let x = 0; x < this.state.canvasWidth; x++) {
            for (let y = 0; y < this.state.canvasWidth; y++) 
            // The key and index are set as a concatenated value of x and y, the newColour prop is bound the currentColour set in this canvas method
            // and the colour is set to the corresponding value from the 2d array
            {
                canvasToReturn.push(<Pixel key={x + " " + y} index={x + " " + y} newColour={this.state.currentColour} colour={this.state.canvasStoredValues[x][y]} changeColour={this.changeColour} />);
            }
        }
        // array is returned to html
        return canvasToReturn;
    }

    // This is the callback function that is passed into the pixels
    changeColour(index) {

        // Index which was stored as a string, representing x and y divided by a space
        // is now converted to ints x and y
        index = index.split(" ");
        let x = parseInt(index[0]);
        let y = parseInt(index[1]);

        // the canvasStoredWidths array stored in state is deep copied to newArray
        var newArray = JSON.parse(JSON.stringify(this.state.canvasStoredValues));

        // The array is modified here to represent the canvas after a pixel has been modified
        newArray[x][y] = this.state.currentColour;
        this.setState({ canvasStoredValues: newArray });
    }

    // The following three event handlers represent the state variables from the form
    onChangeCurrentColour(e) {
        this.setState({
            currentColour: e.target.value
        })
    }

    onChangeArtTitle(e) {
        this.setState({
            artTitle: e.target.value
        })
    }

    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    // The image is submitted to the database here
    onSubmit(e) {
        e.preventDefault();
        alert("Art: " + this.state.artTitle+"\nAuthor: " + this.state.author);

        // Mongodb does not support 2d arrays, so the canvasStoredValues array
        // Shall be converted to a 1d array called arrayToPass
        let arrayToPass = [];

        for (let x = 0; x < this.state.canvasWidth; x++) {
            for (let y = 0; y < this.state.canvasWidth; y++) {
                arrayToPass.push(this.state.canvasStoredValues[x][y]);
            }
        }

        const newImage = {
            artTitle: this.state.artTitle,
            author: this.state.author,
            canvasSize: this.state.canvasWidth,
            artArray: arrayToPass
        }

        // Image is sent to server to then be put up to database
        axios.post('http://localhost:4000/api/images', newImage)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add title of art: </label>
                        <input type="text" className="form-control" value={this.state.artTitle} onChange={this.onChangeArtTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add your name: </label>
                        <input type="text" className="form-control" value={this.state.author} onChange={this.onChangeAuthor}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Upload Art" className="btn btn-primary"></input>
                    </div>
                </form>
                {/*All css is done inline so that it will still work ok for the browse method where there are multiple different images */}
                <div className="canvas" style={{ display: "grid", gridTemplate: `repeat(${this.state.canvasWidth}, 1fr) / repeat(${this.state.canvasWidth}, 1fr)`, aspectRatio: "1 / 1", width: "80vmin", marginLeft: "auto", marginRight: "auto" }}>
                    {this.createCanvas()}
                </div>
                <input value={this.state.currentColour} onChange={this.onChangeCurrentColour}/>
            </div>
        )
    }
}

export default Canvas;