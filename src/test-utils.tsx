import { render, RenderOptions } from '@testing-library/react';
import { ProvidersCombined } from 'ProvidersCombined';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: ProvidersCombined, ...options });

export * from '@testing-library/react';
export { customRender as render };
