import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllTheProvider } from './utils/AllTheProviders';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AllTheProvider>
      <App />
    </AllTheProvider>
  </React.StrictMode>,
);
