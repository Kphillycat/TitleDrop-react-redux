import React, {Component} from 'react'
import Movie from './Movie'
import _ from 'lodash'

class MovieList extends Component {
  render() {
    var movieNodes = _.map(this.props.movies, (movie, index) => {
      return (
        // `key` is a React-specific concept:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Movie time={movie.time} title={movie.title} key={index}>
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
