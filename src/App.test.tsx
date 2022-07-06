import App from 'App';
import { render, screen } from 'test-utils';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { TemperatureWidgetTestIds } from './components/TemperatureWidget/TemperatureWidgetTestIds';

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

  it('should render home page', () => {
    render(<App />);

    const homePage = screen.getByTestId(TemperatureWidgetTestIds.Container);

    expect(homePage).toBeInTheDocument();
  });
});
