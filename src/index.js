import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

const root = document.getElementById('root');
const entry = createRoot(root);

entry.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals();
