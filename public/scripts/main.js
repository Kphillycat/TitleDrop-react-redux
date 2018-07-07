if(console.time){
  console.time('-- TitleDrop Time --');
}
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import Firebase from 'firebase'
import { FIREBASE_URL } from './config';

var config = {
  apiKey: "AIzaSyBx_HE7nCTG8Pi_wqPq3uDykTqD2eUf2_k",
  authDomain: "vivid-torch-9530.firebaseapp.com",
  databaseURL: "https://vivid-torch-9530.firebaseio.com",
  projectId: "vivid-torch-9530",
  storageBucket: "vivid-torch-9530.appspot.com",
  messagingSenderId: "352428896588"
};
Firebase.initializeApp(config);

let initialState = {
  movies: [{
    id: 0,
    title: 'Test',
    time: 'TimeYall'
  }]
};

var db = Firebase.database();
var moviesRef = db.ref("movies/");
// Set initialState with firebase
moviesRef.on('value', (dataSnapShot) => {
  console.timeEnd('-- TitleDrop Time --');

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
