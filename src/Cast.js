import React, { Component } from "react";

class Cast extends Component {
  render() {
    const MAKECAST = cast => {
      let newCaster = cast.map(person => {
        return (
          <ul>
            <li>Actor Name: {person.name}</li>
            <li>Role: {person.role}</li>
          </ul>
        );
      });
      return newCaster;
    };
    return (
      <div>
        <h4>Directors: {this.props.movie.director}</h4>
        <h4>Casts</h4>
        {MAKECAST(this.props.movie.cast)}
      </div>
    );
  }
}

export default Cast;
