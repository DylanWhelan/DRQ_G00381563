import { Component } from "react";
import axios from "axios";


class Modify extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeArtTitle = this.onChangeArtTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
    }
    state = {
        _id: "",
        artTitle: "",
        author: "",
        canvasWidth: 6,
        currentColour: "#000000",
        canvasStoredValues: Array(6).fill(0).map(row => new Array(6).fill("#FFFF00"))
    }

    // This componentDidMount is to ensure that the modify class is provided with information about the object to modify
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/images/'+ this.props.match.params.id)
        .then((response) => {

            this.setState({
                _id: response.data._id,
                artTitle: response.data.artTitle,
                author: response.data.author,
                canvasSize: response.data.canvasSize,
                canvasStoredValues: response.data.artArray
            })
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

    // Submits the modified object to the mongod db database
    onSubmit(e) {
        e.preventDefault();

        const newImage = {
            artTitle: this.state.artTitle,
            author: this.state.author,
            canvasSize: this.state.canvasWidth,
            artArray: this.state.canvasStoredValues,
            _id: this.state._id
        }

        // The axios put here communicates to the server to update the item on the database
        axios.put('http://localhost:4000/api/images/'+this.state._id, newImage)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div>
                {/*This form allows you to change the stored title of the piece and the author's name */}
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
            </div>
        )
    }
}

export default Modify;