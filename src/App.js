import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MoviesDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MoviesDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
    </BrowserRouter>
  );
}

export default App;
