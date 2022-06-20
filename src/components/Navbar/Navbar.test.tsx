import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';

describe('Navbar', () => {
  it('should contain Navbar', () => {
    render(<Navbar />);

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });
  it('should render Navbar', () => {
    render(<Navbar />);

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeVisible();
  });

  it('should contain logo', () => {
    render(<Navbar />);

    const logo = screen.getByRole('heading', { name: /Weather/ });

    expect(logo).toBeInTheDocument();
  });
});
