import { render, screen } from 'utils';
import { Navbar } from 'components/Navbar';
import { NavbarTestIds } from './NavbarTestIds';

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />);

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it('should contain logo', () => {
    render(<Navbar />);

    const logo = screen.getByRole('heading', { name: /weather/i });

    expect(logo).toBeInTheDocument();
  });
  it('should contain link to home page', () => {
    render(<Navbar />);
    const link = screen.getByTestId(NavbarTestIds.HomeLink);

    expect(link).toBeInTheDocument();
  });

  it('should contain link to about page', () => {
    render(<Navbar />);
    const link = screen.getByTestId(NavbarTestIds.AboutLink);

    expect(link).toBeInTheDocument();
  });

  it('should contain link to map page', () => {
    render(<Navbar />);
    const link = screen.getByTestId(NavbarTestIds.MapLink);

    expect(link).toBeInTheDocument();
  });
});
