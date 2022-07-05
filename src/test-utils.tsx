import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from './Provider';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: () => <Provider retryQueries={false}>{ui}</Provider>,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
