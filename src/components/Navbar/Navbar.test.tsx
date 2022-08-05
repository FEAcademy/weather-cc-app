import { render, screen } from 'test-utils';
import { Navbar } from 'components/Navbar';
import { NavbarTitles } from 'components/Navbar/NavbarTitles';

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
    const link = screen.getByTitle(NavbarTitles.Home);

    expect(link).toBeInTheDocument();
  });

  it('should contain link to about page', () => {
    render(<Navbar />);
    const link = screen.getByTitle(NavbarTitles.About);

    expect(link).toBeInTheDocument();
  });

  it('should contain link to map page', () => {
    render(<Navbar />);
    const link = screen.getByTitle(NavbarTitles.Map);

    expect(link).toBeInTheDocument();
  });
});
