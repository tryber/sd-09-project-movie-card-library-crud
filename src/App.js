import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteMovies from './components/RouteMovies';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <RouteMovies />
    </Router>
  );
}

export default App;
