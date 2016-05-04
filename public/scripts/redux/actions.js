// Where all the action creators live and are called by the components

let actions = {
  addMovie: function(movieDetail) {
    return {
      type: 'ADD_MOVIE',
      title: movieDetail.title,
      time: movieDetail.time
    }
  }
}

export default actions
