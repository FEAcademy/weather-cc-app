import { render, RenderOptions } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ReactElement } from 'react';
//import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '../theme/ThemeProvider';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const history = createMemoryHistory();

  return (
    <Router location={history.location} navigator={history}>
      <ThemeProvider>{children}</ThemeProvider>
    </Router>
  );
};

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}, options?: Omit<RenderOptions, 'wrapper'>) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
};

// const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
//   render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { renderWithRouter as render };
