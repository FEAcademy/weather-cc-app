import App from 'App';
import { AboutPageTestIds } from 'pages/About/AboutPageTestIds';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { render, screen } from './utils/custom-render';

describe('App', () => {
  it('router', async () => {
    const route = '/about';

    render(<App />, { route });

    expect(screen.getByTestId(AboutPageTestIds.Container)).toBeInTheDocument();
  });

  it('should render navbar', () => {
    render(<App />);

    const navbar = screen.getByTestId(NavbarTestIds.Container);

    expect(navbar).toBeInTheDocument();
  });

  it('should render PageContainer', () => {
    render(<App />);

    const PageContainer = screen.getByRole('main');

    expect(PageContainer).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    const footer = screen.getByTestId(FooterTestIds.Footer);

    expect(footer).toBeInTheDocument();
  });
});
