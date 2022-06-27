import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { Theme } from '../theme/ThemeProvider';

const customRender = (ui: ReactElement, options: Omit<RenderOptions, 'wrapper'> = {}) =>
  render(ui, {wrapper: Theme, ...options});

export * from '@testing-library/react';

export {customRender as render};
