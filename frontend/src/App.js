import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    // BrowserRouter a <Router> that uses the HTML5 history API
    // Switch is define for set only one route for request
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
