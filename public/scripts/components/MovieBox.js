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

  // TODO: Connect to Firebase

	// grabMovies(){
	// 	$.ajax({
	//       url: this.props.url,
	//       dataType: 'json',
	//       cache: false,
	//       success: function(data) {
	//         this.setState({data: data});
	//       }.bind(this),
	//       error: function(xhr, status, err) {
	//         console.error(this.props.url, status, err.toString());
	//       }.bind(this)
	//     });
	// }
  //
	// addMovie(movie) {
	// 	// if (this.state.auth === false) return;
	//     var movies = this.state.data;
	//     movies.push(movie);
	//     this.setState({data: movies}, function() {
	//       // `setState` accepts a callback. To avoid (improbable) race condition,
	//       // `we'll send the ajax request right after we optimistically set the new
	//       // `state.
	//       $.ajax({
	//         url: this.props.url,
	//         dataType: 'json',
	//         type: 'POST',
	//         data: movie,
	//         success: function(data) {
	//           this.setState({data: data});
	//         }.bind(this),
	//         error: function(xhr, status, err) {
	//           console.error(this.props.url, status, err.toString());
	//         }.bind(this)
	//       });
	//     });
  // }
  //
	// getInitialState() {
	//     return {data: [], auth: false};
	// }
  //
	// componentDidMount() {
	// 	this.grabMovies();
	// 	// setInterval(this.grabMovies, 3000);
	// }
}

export default MovieBox
