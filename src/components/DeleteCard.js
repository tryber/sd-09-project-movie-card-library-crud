import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class DeleteCard extends Component {
  constructor(props) {
    super(props);

    this.deleteMovieRequisition = this.deleteMovieRequisition.bind(this);
  }

  componentDidMount() {
    this.deleteMovieRequisition();
  }

  deleteMovieRequisition() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    return <Redirect to="/" />;
  }
}

DeleteCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default DeleteCard;
