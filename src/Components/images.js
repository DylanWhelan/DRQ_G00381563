import { Component } from "react"
import { ImageItem } from "./imageItem"


export class Images extends Component {
    render() {
        return this.props.images.map( (image)=>{
            return <ImageItem image={image} key = {image._id}/>
        }
        )
    }
}