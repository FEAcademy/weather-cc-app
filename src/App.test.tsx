import { render, screen } from '@testing-library/react';
import App from './App';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';

describe('App', () => {
  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Container);

    expect(footer).toBeInTheDocument();
  });

  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });
});
