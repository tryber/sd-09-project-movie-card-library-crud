import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import '../styles/Edit.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchReq = this.fetchReq.bind(this);
    this.getElementMovie = this.getElementMovie.bind(this);
  }

  componentDidMount() {
    this.fetchReq();
  }

  handleSubmit(updatedMovie) {
    const movie = movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: false,
      shouldRedirect: true,
    });
    return movie;
  }

  getElementMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="edit-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="edit-content">
          <p>{ `titles: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      </div>);
  }

  async fetchReq() {
    const { match } = this.props;
    const { params } = match;
    this.setState({
      status: true,
    }, async () => {
      const movie = await movieAPI.getMovie(params.id);
      this.setState({
        status: false,
        movie,
      });
    });
  }

  // criar um evento onde, quando digitar nos inputs vai mostrando o exemplo abaixo de como ficaria o card

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie" className="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        {this.getElementMovie()}
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
