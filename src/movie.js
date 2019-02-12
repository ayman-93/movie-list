import React, { Component } from "react";
import Review from "./review";
import Cast from "./Cast";
// import MoviList from './movieList';
class Movie extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster} />
        <div>
          Rating: <strong>{this.props.movie.rating}</strong>
        </div>
        <p>{this.props.movie.description}</p>
        <Cast movie={this.props.movie} />
      </div>
    );
  }
}

export default Movie;
