import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <StyledComponentThemeProvider theme={theme}>{children}</StyledComponentThemeProvider>
);

export { ThemeProvider };
