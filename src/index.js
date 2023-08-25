import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// importing  Font Awesome icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faShoppingCart, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faShoppingCart, faUser, faClipboardList);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);