import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '../theme/ThemeProvider';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const history = createMemoryHistory();

  return (
    <ThemeProvider>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </ThemeProvider>
  );
};

export { AllTheProviders };
