import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(state) {
    super(state);
    this.state = {
      // title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    await movieAPI.getMovie(match.params.id).then((res) => {
      this.setState({
        // title: '',
        subtitle: res.subtitle,
        storyline: res.storyline,
        imagePath: res.imagePath,
        genre: res.genre,
        rating: res.rating,
        loading: false,
      });
    });
  }

  render() {
    const { loading, storyline, imagePath, genre, rating, subtitle } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string }).isRequired,
  }).isRequired,
};

export default MovieDetails;
