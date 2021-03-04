import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
    </BrowserRouter>
  );
}

export default App;
