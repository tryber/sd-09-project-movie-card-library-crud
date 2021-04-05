import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Router>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route path="/"><MovieList /></Route>
          <Route path="/movies/:id"><MovieDetails /></Route>
          <Route path="movies/new"><NewMovie /></Route>
          <Route path="movies/:id/edit"><EditMovie /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
