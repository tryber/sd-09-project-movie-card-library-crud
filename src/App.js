import React from 'react';

import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

const myRoutes = (
  <Router>
    <Switch>
      <Route
        exact
        path="/movies/:id"
        render={ (props) => (
          <MovieDetails
            { ...props }
            id={ props.match.url.split('/')[2] }
          />
        ) }
      />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/" component={ MovieList } />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

function App() {
  return (
    <>
      <div className="movie-card-header page-title">Movie Card Library CRUD</div>
      { myRoutes }
    </>
  );
}

export default App;
