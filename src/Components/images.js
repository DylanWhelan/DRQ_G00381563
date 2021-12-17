import { Component } from "react"
import { ImageItem } from "./imageItem"


export class Images extends Component {
    render() {
        // This creates an array of imageItems froms the information passed to it from the browse component
        return this.props.images.map( (image)=>{
            return <ImageItem image={image} key = {image._id}/>
        }
        )
    }
}