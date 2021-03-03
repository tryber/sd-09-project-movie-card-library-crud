import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Router>
            <div>Movie Card Library CRUD</div>
          </Router>
          <Router exact path="/" component={ MovieList } />
          <Router
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Router exact path="/movies/new" component={ <NewMovie /> } />
          <Router exact path="/movies/:id/edit" component={ <EditMovie /> } />
          <Router component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
