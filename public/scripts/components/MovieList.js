import React, {Component} from 'react'
import Movie from './Movie'

class MovieList extends Component {
  render() {
    var movieNodes = this.props.movies.map((movie, index) => {
      return (
        // `key` is a React-specific concept:
        <Movie time={movie.time} title={movie.title} key={movie.id}>
        </Movie>
      );
    });

    return (
      <div className="movieList container">
        {movieNodes}
      </div>
    );
  }
}

export default MovieList
