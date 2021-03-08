import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadMovie = this.loadMovie.bind(this);
  }

  componentDidMount() {
    this.loadMovie();
  }

  async handleSubmit(updatedMovie) {
    const response = await movieAPI.updateMovie(updatedMovie);

    this.setState({
      shouldRedirect: true,
      movie: response,
    });
  }

  async loadMovie() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);

    this.setState({
      status: 'ready',
      movie: response,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;

  // render() {
    // const { status, shouldRedirect, movie } = this.state;
  //   return (
  //     <div data-testid="edit-movie">
  //       {shouldRedirect === true ? <Redirect to="/" /> : <div>{ shouldRedirect }</div> }
  //       {status === 'loading' ? <Loading />
  //         : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
  //     </div>
  //   );
  // }
// }