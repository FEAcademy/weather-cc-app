import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllProviders } from './utils/AllProviders';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>,
);
