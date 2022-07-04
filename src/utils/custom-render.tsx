import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../theme/ThemeProvider';

const AllProvidersWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}, options?: Omit<RenderOptions, 'wrapper'>) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: AllProvidersWrapper, ...options }),
  };
};

export * from '@testing-library/react';
export { renderWithRouter as render };
