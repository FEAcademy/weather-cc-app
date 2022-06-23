import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProviderEl } from './ThemeProviderEl';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: ThemeProviderEl, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as styledRender };
