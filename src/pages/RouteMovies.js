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
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default RouteMovies;
