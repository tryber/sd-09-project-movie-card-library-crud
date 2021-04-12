import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  createRoute() {
    return (
      <div>
        <Route exact path="/" component={ MovieList } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route component={ NotFound } />
      </div>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Switch>
          { this.createRoute() }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
