import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import DetailsCard from '../components/DetailsCard';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id).then((response) => {
      this.setState({
        movie: response,
        loading: false,
        linkID: id,
      });
    });
  }

  render() {
    const { movie } = this.state;
    const { loading, linkID } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <DetailsCard movie={ movie } />
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${linkID}/edit` }>EDITAR</Link></button>
        <button type="button" onClick={ () => movieAPI.deleteMovie(linkID) }>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
