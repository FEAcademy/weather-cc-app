import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider_t } from 'theme/ThemeProvider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider_t>
      <App />
    </ThemeProvider_t>
  </React.StrictMode>,
);
