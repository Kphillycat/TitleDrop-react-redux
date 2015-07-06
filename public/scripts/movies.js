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
	        // `key` is a React-specific concept and is not mandatory for the
	        // purpose of this tutorial. if you're curious, see more here:
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

var MovieBox = React.createClass({
	render: function(){
		return (
			<div className="movies-box"> 
				<MovieList data={this.state.data}></MovieList>
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
	getInitialState: function() {
	    return {data: []};
	},
	componentDidMount: function() {
		this.grabMovies();
		setInterval(this.grabMovies, 3000);
	}
});

React.render(
  <MovieBox url="movies"></MovieBox>,
  document.getElementById('content')
);