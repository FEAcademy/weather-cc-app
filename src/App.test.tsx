import App from 'App';
import { render, screen } from 'theme/theme-test-utils';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { handlers } from './mocks/handlers';
import { server } from './mocks/server';

describe('App', () => {
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

  it('msw test', () => {
    server.use(handlers[0]);

    render(<App />);

    setTimeout(() => {
      const city = screen.getByTestId('city');
      expect(city).toHaveTextContent(/London/i);
    }, 5000);
  });
});
