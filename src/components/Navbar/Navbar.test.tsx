import { render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />);

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it('should contain logo', () => {
    render(<Navbar />);

    const navbar = screen.getByRole('navigation');

    const logo = screen.getByRole('heading');

    expect(navbar).toContainElement(logo);
  });
});
