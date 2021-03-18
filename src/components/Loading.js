import React, { Component } from 'react';
import '../styles/Components/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container"><span>Carregando...</span></div>
    );
  }
}

export default Loading;
