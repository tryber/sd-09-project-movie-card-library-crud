import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Trybeflix</h1>
        <ul>
          <li>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
