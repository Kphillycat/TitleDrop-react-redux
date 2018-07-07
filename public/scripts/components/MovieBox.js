import React, {Component} from 'react'
import MovieList from './MovieList'
import MovieForm from './MovieForm'

class MovieBox extends Component {
  constructor(props) {
    super(props);
  }

	render () {
		return (
			<div className="movies-box">
        <MovieForm dispatch={this.props.dispatch} />
        <MovieList movies={this.props.movies}></MovieList>
			</div>
    );
	}
}

export default MovieBox
