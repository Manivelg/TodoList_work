import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/main.scss';
// import Dashboard from './school/dashboard';
import School from './school/School';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <School />
  </React.StrictMode>
);
