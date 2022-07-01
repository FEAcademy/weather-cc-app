import { render, RenderOptions } from '@testing-library/react';
import { TestProvider } from 'Provider';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
