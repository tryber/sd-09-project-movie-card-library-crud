import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  mainHeader() {
    return (
      <header className="main-header">
        <h1 className="main-title">Movie Card Library CRUD</h1>
      </header>
    );
  }

  routes() {
    return (
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    );
  }

  render() {
    return (
      <>
        {this.mainHeader()}
        <BrowserRouter>
          {this.routes()}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
