import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, PropsWithChildren } from 'react';
import { TestQueryClientProvider } from '../react-query-provider';
import { ThemeProvider } from '../theme/ThemeProvider';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <TestQueryClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TestQueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
