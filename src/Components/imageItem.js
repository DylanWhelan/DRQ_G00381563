import { Component } from "react";


export class ImageItem extends Component {


    render(){
        return(
            <div>
                <h4>{this.props.image.Title}</h4>
                <h4>{this.props.image.Year}</h4>
                <img src={this.props.image.Poster} width="200" height="200"></img>
            </div>
        )
    }
}