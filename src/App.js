import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import NewMovie from './pages/NewMovie'
import EditMovie from './pages/EditMovie'

function App() {
  return (
    <Router>
      <Route path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
    </Router>
  );
}

export default App;
