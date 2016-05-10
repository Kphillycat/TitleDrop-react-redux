import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieBox from './MovieBox'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {

  render() {
    return (
      <div>
          <h1>Title DROP!!!</h1>
          <MovieBox addMovie={this.props.actions.addMovie} movies={this.props.movies} url="movies"></MovieBox>
      </div>
    )
  }
}

// Could give a subset of state here
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) //Wraps all actions with dispatcher. Actions.addMovie(), etc.
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
