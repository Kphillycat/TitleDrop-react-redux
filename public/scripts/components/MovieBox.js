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
        <MovieList movies={this.props.movies}></MovieList>
        <MovieForm dispatch={this.props.dispatch} />
			</div>
    );
	}
}

export default MovieBox
