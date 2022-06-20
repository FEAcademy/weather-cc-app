import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';
import { NavbarTestIds } from 'components/Navbar/NavbarTestIds';

describe('Navbar', () => {
  it('should contain Navbar', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId(NavbarTestIds.Navbar);

    expect(navbar).toBeInTheDocument();
  });
  it('should render Navbar', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId(NavbarTestIds.Navbar);

    expect(navbar).toBeVisible();
  });

  it('should contain logo', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId(NavbarTestIds.Logo);

    expect(navbar).toHaveTextContent('Weatherly');
  });
});
