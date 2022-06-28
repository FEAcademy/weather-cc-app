import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import { ThemeProviderElement } from './ThemeProviderElement';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: ThemeProviderElement, ...options });

export * from '@testing-library/react';
export { customRender as render };
