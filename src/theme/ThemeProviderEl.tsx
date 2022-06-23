import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeProviderEl = ({ children }: PropsWithChildren) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export { ThemeProviderEl };
