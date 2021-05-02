import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route
        exact
        path="/movies/:id"
        render={ (props) => <MovieDetails { ...props } /> }
      />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route
        exact
        path="/movies/:id/edit"
        render={ (props) => <EditMovie { ...props } /> }
      />
      <Route path="*" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
