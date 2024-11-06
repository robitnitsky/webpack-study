import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  /* eslint-disable no-undef */
  document.getElementById('app'),
  /* eslint-enable no-undef */
);
