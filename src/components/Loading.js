import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { loadingMessage } = this.props;

    return <div>{loadingMessage}</div>;
  }
}

Loading.propTypes = {
  loadingMessage: PropTypes.string.isRequired,
};

export default Loading;
