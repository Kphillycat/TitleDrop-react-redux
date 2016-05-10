import React, {Component} from 'react'

class MovieForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleText: '',
      timeText: ''
    }
  }

  handleTitleChange(event) {
    this.setState({
      titleText: event.target.value
    });
  }

  handleTimeChange(event) {
    this.setState({
      timeText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.titleText || !this.state.timeText) {
      console.log("Title/Time can not be blanksie!");
      return;
    }
    //Send the result of the action to the dispatcher
    var movieDetail = {
      title: this.state.titleText,
      time: this.state.timeText
    }
    this.props.actions.addMovie(movieDetail);
    // this.props.actions.addMovie({
    //   timeText: '',
    //   titleText: ''
    // });
    this.setState({
      timeText: '',
      titleText: ''
    });
  };

  render() {
    return (
      <form className="movieForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
          placeholder="Movie Title"
          ref="title"
          value={this.state.titleText}
          onChange={this.handleTitleChange.bind(this)}
        />
        <input type="text"
          placeholder="When they say it"
          ref="title"
          value={this.state.timeText}
          onChange={this.handleTimeChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default MovieForm
