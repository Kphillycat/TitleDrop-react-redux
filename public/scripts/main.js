import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let initialState = {
  movies: [{
      id: 0,
      title: 'Test',
      time: 'TimeYall'
    }]
  };

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// render(
//   <MovieBox url="movies"></MovieBox>,
//   document.getElementById('app')
// );
