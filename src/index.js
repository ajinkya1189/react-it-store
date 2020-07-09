import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './context';
import './index.css';

ReactDOM.render(
  <DataProvider>
    <Router>
    <App />
  </Router>
  </DataProvider>,  
  document.getElementById('root')
);
