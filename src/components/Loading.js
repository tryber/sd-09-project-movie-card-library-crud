import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const { loadingMessage } = this.props;
    return (
      <div>{ loadingMessage }</div>
    );
  }
}

export default Loading;
