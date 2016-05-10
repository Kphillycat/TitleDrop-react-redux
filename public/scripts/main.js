import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import Firebase from 'firebase'
import { FIREBASE_URL } from './config';

let firebaseRef = new Firebase(FIREBASE_URL);

let initialState = {
  movies: [{
      id: 0,
      title: 'Test',
      time: 'TimeYall'
    }]
  };

// Set initialState with firebase
firebaseRef.on('value', (dataSnapShot) => {
  var movies = dataSnapShot.val();
  initialState = { movies: movies };
  console.log('Got the movies');
  console.log(initialState);
  let store = configureStore(initialState)

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
});



// render(
//   <MovieBox url="movies"></MovieBox>,
//   document.getElementById('app')
// );
