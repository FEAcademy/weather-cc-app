import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
//import { BrowserRouter } from 'react-router-dom';

import { AllTheProviders } from './AllTheProviders';

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
