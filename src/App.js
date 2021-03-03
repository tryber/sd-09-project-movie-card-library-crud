import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {EditMovie, NewMovie, MovieDetails, MovieList, NotFound} from './pages/index';

function App() {
  return (
    <BrowserRouter>     
      <Switch>
        <Route path='/' exact component={MovieList} />
        <Route path='/movies/:id/edit' exact component={EditMovie} />
        <Route path='/movies/new' exact component={NewMovie} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Route component={NotFound} />        
      </Switch>
      <Link to='/movies/new'>
        ADICIONAR CARTÃO
      </Link>
    </BrowserRouter>
  );
}
// 
export default App;
