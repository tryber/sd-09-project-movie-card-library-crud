import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD.</div>
      <BrowserRouter>
        <Route path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/not" component={ NotFound } />
      </BrowserRouter>
    </div>
  );
}

export default App;
