import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';
import { NavbarTestIds } from 'components/Navbar/NavbarTestIds';

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should contain logo', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    const logo = screen.getByTestId(NavbarTestIds.Logo);

    expect(navbar).toContainElement(logo);
  });
});
