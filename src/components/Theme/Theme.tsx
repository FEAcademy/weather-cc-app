import React from 'react';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  appMaxWidth: 1200,
  colors: {
    lightGray: '#707070',
  },
  fontWeights: {
    light: 300,
    bold: 900,
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export { Theme, theme };
