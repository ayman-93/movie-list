import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Movie from "./movie";
import MovieList from "./movieList";

class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
       
      </div>
    );
  }
}


export default App;
