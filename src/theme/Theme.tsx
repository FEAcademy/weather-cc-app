import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  appMaxWidth: 1200,
  colors: {
    lightGray: '#707070',
  },
  fontWeights: {
    light: 300,
    bold: 900,
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme, theme };
