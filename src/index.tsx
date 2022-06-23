import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProviderEl } from 'theme/ThemeProviderEl';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProviderEl>
      <App />
    </ThemeProviderEl>
  </React.StrictMode>,
);
