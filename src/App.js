import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
