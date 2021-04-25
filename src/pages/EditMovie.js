import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { status: 'loading' },
      async () => {
        const fetchedMovie = await movieAPI.getMovie(id);
        this.setState({
          status: '200',
          movie: fetchedMovie,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  movie: PropTypes.shape({
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

EditMovie.defaultProps = {
  movie: undefined,
};

export default EditMovie;
