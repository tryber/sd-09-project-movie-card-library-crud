import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page-title">Movie Card Library CRUD</div>
      <div className="body">
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route
            exact
            path="/movies/:id/edit"
            render={ ((props) => <EditMovie { ...props } />) }
          />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
