import React, { Component } from 'react';
import '../styles/Pages/NewMovie.css';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      emptyMovie: {
        id: 0,
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        bookmarked: false,
        genre: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateNewMovieId = this.generateNewMovieId.bind(this);
  }

  componentDidMount() {
    this.generateNewMovieId();
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async generateNewMovieId() {
    const movieList = await movieAPI.getMovies();
    const newId = movieList[movieList.length - 1].id;
    this.setState((prevState) => ({
      emptyMovie: { ...prevState.emptyMovie, id: newId },
    }));
  }

  render() {
    const { shouldRedirect, emptyMovie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="new-movie-form-container" data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } movie={ emptyMovie } />
      </div>
    );
  }
}
export default NewMovie;
