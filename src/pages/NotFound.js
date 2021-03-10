import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div>
        <div data-testid="404-error">Página não encontrada</div>
        <p>Você está em NotFound</p>
      </div>
    );
  }
}

export default NotFound;
