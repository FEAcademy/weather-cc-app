import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

describe('Navbar', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it('should contain logo', () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    const logo = screen.getByRole('heading', { name: /weather/i });

    expect(logo).toBeInTheDocument();
  });
});
