import React, { Component } from 'react';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound} from './pages'
import { BrowserRouter, Route , Switch} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/movies/new' component={ NewMovie } />
            <Route exact path='/movies/:id/edit' component={ EditMovie } />
            <Route exact path='/movies/:id' component={ MovieDetails } />
            <Route exact path='/' component={ MovieList } />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
