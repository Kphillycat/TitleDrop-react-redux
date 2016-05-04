// Pure function reducer that will take in state and action to return NEW state based on action type

function getId(state) {
  return state.movies.reduce((maxId, movie) => {
    return Math.max(movie.id, maxId)
  }, -1) + 1
}

// TODO: Put actions types in constants
let reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return Object.assign({}, state, {
        movies: [{
          title: action.title,
          time: action.time,
          id: getId(state)
        }, ...state.movies]
      })
    default:
      return state;
  }
}

export default reducer
