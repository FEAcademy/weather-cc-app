import { Navbar } from 'components/Navbar';
import { styledRender, screen } from 'theme/test-utils';

describe('Navbar', () => {
  it('should render', () => {
    styledRender(<Navbar />);

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it('should contain logo', () => {
    styledRender(<Navbar />);

    const logo = screen.getByRole('heading', { name: /weather/i });

    expect(logo).toBeInTheDocument();
  });
});
