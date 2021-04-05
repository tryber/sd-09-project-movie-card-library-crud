import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
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
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
      <Route exact path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
      <Route component={ NotFound } />
    </Router>
  );
}

export default App;
