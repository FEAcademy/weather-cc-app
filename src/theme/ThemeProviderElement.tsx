import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeProviderElement = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeProviderElement };
