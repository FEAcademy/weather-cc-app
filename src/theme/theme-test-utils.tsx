import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

const AllTheProviders: FC<{ children: React.ReactNode; }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

const customThemeRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customThemeRender as render };
