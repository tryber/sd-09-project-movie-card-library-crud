import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error">
        Página não encontrada
        <Link to="/">Retornar a página principal</Link>
      </div>
    );
  }
}

export default NotFound;
