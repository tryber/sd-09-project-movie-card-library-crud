import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router><div>Movie Card Library CRUD</div></Router>
        <Router exact path="/" component={} />
        <Router path="/movies/new" component={} />
        <Router path="/movies/:id" component={} />
        <Router path="/movies/:id/edit" component={} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
