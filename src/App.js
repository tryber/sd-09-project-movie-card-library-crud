import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteMovies from './pages/RouteMovies';
import './App.css';

function App() {
  return (
    <Router>
      <RouteMovies />
      <div>Movie Card Library CRUD</div>
    </Router>
  );
}

export default App;
