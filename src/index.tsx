import { ProvidersCombined } from 'ProvidersCombined';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ProvidersCombined>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </ProvidersCombined>
  </React.StrictMode>,
);
