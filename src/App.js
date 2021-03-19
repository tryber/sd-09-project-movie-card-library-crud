import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

/* DEIXO AQUI OS MAIS SINCEROS AGRADECIMENTOS A BRENNO CALADO, POIS ME ENSINOU BASTANTE NESTE PROJETO, O QUE POSSIBILITOU QUE FOSSE ENTREGUE A TEMPO. MINHA GRATIDÃO ETERNA! */

export default App;
