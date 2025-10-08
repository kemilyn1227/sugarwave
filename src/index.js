import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import P1 from './components/p1/page1';
import Nav from './components/navBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <P1/>
    
  </React.StrictMode>
);

