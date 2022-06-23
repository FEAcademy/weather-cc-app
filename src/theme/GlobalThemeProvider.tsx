import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  padding: {
    appPadding: '0 18px',
  },
  width: {
    appWidth: '1200px',
  },
  color: {
    logoColor: '#707070',
  },
};

const GlobalThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalThemeProvider;
