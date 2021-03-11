import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import { EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Route path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="*" component={ NotFound } />
    </Router>
  );
}

export default App;
