import React, { Component } from 'react';
import '../styles/notFound.css';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error" className="notFoundContainer">
        Página não encontrada
      </div>
    );
  }
}

export default NotFound;
