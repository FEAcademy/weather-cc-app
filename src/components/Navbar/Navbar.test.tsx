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
    const link = screen.getByTestId(NavbarTestIds.HomePageIcon);

    expect(link).toBeInTheDocument();
  });

  it('should contain link to about page', () => {
    render(<Navbar />);
    const link = screen.getByTestId(NavbarTestIds.AboutIcon);

    expect(link).toBeInTheDocument();
  });
});
