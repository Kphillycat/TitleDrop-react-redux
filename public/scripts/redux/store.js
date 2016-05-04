import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// For logging middleware
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)


// Initial State is set in main.js
export default function configureStore(initialState = { movies: [] }) {
  return finalCreateStore(reducer, initialState)
}
