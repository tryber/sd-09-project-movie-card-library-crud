import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <route exact path="/" component={ MovieList } />
        <route path="/movies/:id" component={ MovieDetails }/>
        <route path="/movies/new" component={ NewMovie } />
        <route path="/movies/:id/edit" component={ EditMovie } />
        <route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
