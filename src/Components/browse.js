import { Component } from "react";
import { Images } from "./images";


class Browse extends Component {
    constructor() {
        super();

        this.state = {
            movies: [
                {
                    "Title": "Avengers: Infinity War",
                    "Year": "2018",
                    "imdbID": "tt4154756",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
                },
                {
                    "Title": "Captain America: Civil War",
                    "Year": "2016",
                    "imdbID": "tt3498820",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
                },
                {
                    "Title": "Charlie Wilson's War",
                    "Year": "2007",
                    "imdbID": "tt0472062",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
                }
            ]
        }
    }


    render() {
        return (
            <div>
                <h1>This is another lovely place holder ain't it?</h1>
                <Images images={this.state.movies}></Images>
            </div>
        )
    }
}

export default Browse;