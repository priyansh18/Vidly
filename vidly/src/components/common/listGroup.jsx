import React, { Component } from "react";

class ListGroup extends Component {
  state = {
    genres: getGenres(),
  };
  render() {
    return ({this.state.genres.map(genre => 
    (<ul class="list-group">
    <li class="list-group-item">All Genres</li>
    <li class="list-group-item">{genre.name}</li>
  </ul>))}
      
    );
  }
}

export default ListGroup;
