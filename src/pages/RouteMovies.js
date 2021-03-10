import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NewMovie from './NewMovie';
import EditMovie from './EditMovie';
import NotFound from './NotFound';

class RouteMovies extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact ath="" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default RouteMovies;
