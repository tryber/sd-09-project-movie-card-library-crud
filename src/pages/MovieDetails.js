import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieInfo from '../components/MovieInfo';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      info: {},
    };
    // this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieInfo();
  }

  async fetchMovieInfo() {
    const { match } = this.props;
    const { id } = match.params;
    const info = await movieAPI.getMovie(id)
      .then((res) => res)
      .catch((error) => {
        console.error(error);
        // Vou tratar o erro depois que atingir os 100% ^^'
        return { error, message: 'Error fecthing movie info' };
      });
    this.setState({ info, loading: false });
  }

  /*
  myAlert(msg) {
    alert(msg);
  }

  deleteMovie() {
    const { info } = this.state;
    const { id } = info;
    this.setState(
      { loading: true },
      async () => {
        try {
          const result = await movieAPI.deleteMovie(id);
          if (result.status !== 'OK') throw new Error('Could not delete movie');
          // this.myAlert('Movie succesfully deleted!');
          this.setState({ shouldRedirect: true });
        } catch (error) {
          this.setState({ loading: false });
          this.myAlert(error);
        }
      },
    );
  }
  */

  render() {
    const { loading, shouldRedirect, info } = this.state;
    const { id } = info;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      loading
        ? <Loading />
        : (
          <div>
            <MovieInfo info={ info } />
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
          </div>
        )
    );
  }
}

MovieDetails.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default MovieDetails;
