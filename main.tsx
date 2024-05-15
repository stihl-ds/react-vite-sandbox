import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@stihl-design-system/components/styles/fonts'; // add this import

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
