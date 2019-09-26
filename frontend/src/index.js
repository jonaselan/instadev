// is necessary for use jsx
import React from 'react';
// integration with browser
import ReactDOM from 'react-dom';
import App from './App';

import './stylesheets/global.css';

// get the App.js element and build the app on the index.html (div root)
ReactDOM.render(<App />, document.getElementById('root'));
