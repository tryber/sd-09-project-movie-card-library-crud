import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { txt } = this.props;

    return (
      <div>{ txt }</div>
    );
  }
}

Loading.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Loading;
