import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Potremmo definire che rootElement sia di tipo Root ma in questo caso dovremmo avere una funzione di mount e una di unmount

// Usiamo '!' per asserire che getElementById non restituirà null.
const rootElement = document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

root.render(<React.StrictMode>
  <App />
</React.StrictMode>);
