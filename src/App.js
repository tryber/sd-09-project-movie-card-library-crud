import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Route to="/movies/:id/edit" component={ EditMovie } />
      <Route to="/movies/:id" component={ MovieDetails } />
      <Route to="/movies/new" component={ NewMovie } />
      <Route to="/" component={ MovieList } />
      <Route to="/" component={ NotFound } />
    </Router>
  );
}

export default App;
