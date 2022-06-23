import { render, RenderOptions } from '@testing-library/react';
import { theme } from 'App';
import { FC, ReactNode, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const GlobalThemeProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: GlobalThemeProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
