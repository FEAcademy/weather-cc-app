import { ProvidersCombined } from 'ProvidersCombined';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const publicUrl = process.env.PUBLIC_URL;

root.render(
  <React.StrictMode>
    <ProvidersCombined>
      <Router basename={publicUrl}>
        <App />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </ProvidersCombined>
  </React.StrictMode>,
);
