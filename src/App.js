import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit"><EditMovie /></Route>
        <Route path="/movies/new"><NewMovie /></Route>
        <Route path="/movies/:id"><MovieDetails /></Route>
        <Route path="/"><MovieList /></Route>
        <Route path="*"><p>NotFound </p></Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
- a rota `/` deve renderizar MovieList
- a rota `/movies/:id` deve renderizar MovieDetails
- a rota `/movies/new` deve renderizar NewMovie
- a rota `/movies/:id/edit` deve renderizar EditMovie
- qualquer rota não declarada deve renderizar NotFound
*/
