import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

if(process.env.NODE_ENV !== 'production') {
  React.perf = require('react-addons-perf');
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
);
