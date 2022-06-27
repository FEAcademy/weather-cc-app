import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from 'theme/ThemeProvider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
);
