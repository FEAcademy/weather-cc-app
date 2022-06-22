import { render, screen } from '@testing-library/react';
import App from './App';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';

describe('App', () => {
  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });
});
