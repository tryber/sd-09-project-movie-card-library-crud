import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Movie cards Library</h1>
      </header>
      <Switch>
        <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
        <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
