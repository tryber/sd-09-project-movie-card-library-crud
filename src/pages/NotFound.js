import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div
        className="error-container"
        data-testid="404-error"
      >
        Página não encontrada
        <div>
          <Link to="/">Retornar a página principal</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
