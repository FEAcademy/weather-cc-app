import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProviderElement } from 'theme';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProviderElement>
      <App />
    </ThemeProviderElement>
  </React.StrictMode>,
);
