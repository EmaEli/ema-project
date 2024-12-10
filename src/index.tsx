import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import AppProviders from 'providers/AppProviders';
import App from 'src/App';

// Ensure the 'root' element exists in the HTML before proceeding
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Ensure that an element with id 'root' exists in index.html.");
}

ReactDOM.createRoot(rootElement).render(<React.StrictMode>
  <AppProviders>
    <App />
  </AppProviders>
</React.StrictMode>);
