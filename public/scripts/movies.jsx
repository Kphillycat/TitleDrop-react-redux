var Movie = React.createClass({
	render: function(){
		return (
	      <div className="movie-card">
	        <div className="title">
	        	{this.props.title}
	        </div>
	        <div className="time">
	          {this.props.time}
	        </div>
	      </div>
	      )
	}
});

var MovieList = React.createClass({
	render: function() {
	    var movieNodes = this.props.data.map(function(movie, index) {
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
}});

var MovieForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var time = React.findDOMNode(this.refs.time).value.trim();
    if (!time || !title) {
      return;
    }
    this.props.onMovieSubmit({title: title, time: time});
    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.time).value = '';
  },
  render: function() {
    return (
      <form className="movieForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Movie Title" ref="title" />
        <input type="text" placeholder="When they say it" ref="time" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var MovieBox = React.createClass({
	render: function(){
		return (
			<div className="movies-box"> 
				<MovieList data={this.state.data}></MovieList>
        		<MovieForm onMovieSubmit={this.addMovie} />
			</div>);
	},
	grabMovies: function(){
		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	addMovie: function(movie) {
		// if (this.state.auth === false) return;
	    var movies = this.state.data;
	    movies.push(movie);
	    this.setState({data: movies}, function() {
	      // `setState` accepts a callback. To avoid (improbable) race condition,
	      // `we'll send the ajax request right after we optimistically set the new
	      // `state.
	      $.ajax({
	        url: this.props.url,
	        dataType: 'json',
	        type: 'POST',
	        data: movie,
	        success: function(data) {
	          this.setState({data: data});
	        }.bind(this),
	        error: function(xhr, status, err) {
	          console.error(this.props.url, status, err.toString());
	        }.bind(this)
	      });
	    });
  	},
	getInitialState: function() {
	    return {data: [], auth: false};
	},
	componentDidMount: function() {
		this.grabMovies();
		// setInterval(this.grabMovies, 3000);
	}
});

// Render Errrthing!

React.render(
  <MovieBox url="movies"></MovieBox>,
  document.getElementById('content')
);