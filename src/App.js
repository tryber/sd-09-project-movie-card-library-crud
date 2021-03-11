import React from 'react';
import { BrowserRouter as Route, Switch, Router } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      <h1> Movie Card Library CRUD </h1>
      <Router>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
