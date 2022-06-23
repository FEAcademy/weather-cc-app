import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Footer } from './Footer';
import { FooterTestIds } from './FooterTestIds';

describe('Footer', () => {
  it('should render footer', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render correct footer text', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2016-01-01'));

    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );
    const footer = screen.getByTestId(FooterTestIds.Footer);
    expect(footer).toHaveTextContent(/weatherly - 2016/i);
  });
});
