import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieBox from './MovieBox'

class App extends Component {

  render() {
    return (
      <div>
          <h1>Title DROP!!!</h1>
          <MovieBox dispatch={this.props.dispatch} movies={this.props.movies} url="movies"></MovieBox>
      </div>
    )
  }
}

// Could give a subset of state here
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
