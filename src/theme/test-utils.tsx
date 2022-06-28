import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from './ThemeProvider';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: ThemeProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as styledRender };
