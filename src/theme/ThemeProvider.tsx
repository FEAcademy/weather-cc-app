import React, { PropsWithChildren } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
);

export { ThemeProvider };
