import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { QueryClientProvider } from './react-query-provider';
import { ThemeProvider } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
