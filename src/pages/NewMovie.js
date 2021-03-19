import React from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: false,
      movieInicialState: {
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
    this.generateNewMovieId = this.generateNewMovieId.bind(this);
  }

  componentDidMount() {
    this.generateNewMovieId();
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => this.setState({
      shouldRedirect: true,
    }));
  }

  async generateNewMovieId() {
    const movieList = await movieAPI.getMovies();
    const movieId = movieList[movieList.length - 1].id;
    console.log(movieList);
    this.setState((prevState) => ({
      movieInicialState: {
        ...prevState.movieInicialState,
        id: movieId,
      },
    }));
  }

  render() {
    const { shouldRedirect, movieInicialState } = this.state;

    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } movie={ movieInicialState } />
      </div>
    );
  }
}

export default NewMovie;
