import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';

import DataContext from './contexts/DataContext';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <DataContext>
    <Router>
      <App />
    </Router>
  </DataContext>,
  document.getElementById('root')
);
