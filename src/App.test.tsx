import { render, screen } from '@testing-library/react';
import App from './App';
import { AppTestIds } from './AppTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';

describe('App', () => {
  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });
  it('should contains Navbar', () => {
    render(<App />);
    const footer = screen.getByTestId(AppTestIds.Footer);
    expect(footer).toBeInTheDocument();
  });
});
