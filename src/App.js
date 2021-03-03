import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route exact path='/' component={MovieList} />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path='/movies/new' component={NewMovie} />
      <Route path="*" component={ NotFound } />
    </Router>
  );
}

export default App;