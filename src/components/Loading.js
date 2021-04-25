import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="center center-details">
        <div className="text text-details">Carregando...</div>
        <div className="ring ring-details" />
      </div>
    );
  }
}

export default Loading;
