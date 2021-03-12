import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteMovies from './pages/RouteMovies';
import './App.css';

function App() {
  return (
    <Router>
      <RouteMovies />
    </Router>
  );
}

export default App;
