import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalThemeProvider from 'theme/GlobalThemeProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>,
);
