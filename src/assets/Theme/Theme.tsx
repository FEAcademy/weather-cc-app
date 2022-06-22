import React from 'react';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    lightGray: '#707070',
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export { Theme, theme };
