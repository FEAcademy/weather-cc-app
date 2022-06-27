import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const GlobalThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalThemeProvider;
