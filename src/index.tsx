import { Provider } from 'Provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  </React.StrictMode>,
);
