import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeProvider_t = ({ children }: PropsWithChildren) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export { ThemeProvider_t };
