import React, { Component } from 'react'

class Movie extends Component {

	render() {
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
}

export default Movie
