import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { AllTheProvider } from './AllTheProviders';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
