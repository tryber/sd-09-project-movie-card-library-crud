import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MovieDetails, MovieList, EditMovie, NotFound, NewMovie } from '../pages';

export default function RouteMovies() {
  return (
    <Switch>
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/" component={ MovieList } />
      <Route component={ NotFound } />
    </Switch>
  );
}
