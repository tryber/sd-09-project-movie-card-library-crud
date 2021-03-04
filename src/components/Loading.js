import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div>{ this.props.loadingMessage }</div>
    );
  }
}

export default Loading;
