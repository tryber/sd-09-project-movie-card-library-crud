import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </Router>
  );
}

export default App;
