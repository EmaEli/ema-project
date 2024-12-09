import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';

// Ensure the 'root' element exists in the HTML before proceeding
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Ensure that an element with id 'root' exists in index.html.");
}

ReactDOM.createRoot(rootElement).render(<React.StrictMode>
  <App />
</React.StrictMode>);
