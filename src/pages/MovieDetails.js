import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;

    this.state = {
      movie: [],
      loading: true,
      movieId: id,
    };
    this.movieDetails = this.movieDetails.bind(this);
    this.movieDelete = this.movieDelete.bind(this);
  }

  componentDidMount() {
    this.movieDetails();
  }

  async movieDetails() {
    this.setState({
      movie: await movieAPI.getMovie(this.state.movieId),
      loading: false,
    });
  }

  async movieDelete(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { id } = this.props.match.params;
    const { loading, movie } = this.state;
    if (loading) return <Loading />;


    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="movie-details" data-testid="movie-details">
        <img className="image-details" alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title:${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link className="link" to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link className="link" to="/" >VOLTAR</Link>
        <Link className="link" onClick={() => this.movieDelete(id)} to="/" >DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropsTypes.shape({
    params: PropsTypes.shape({
      id: PropsTypes.string,
    }),
  }).isRequired,
};
