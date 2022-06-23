import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import GlobalThemeProvider from './GlobalThemeProvider';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: GlobalThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
