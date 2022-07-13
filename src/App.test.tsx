import App from 'App';
import { Paths } from 'enums/Paths';
import { render, screen } from 'utils';
import { AboutPageTestIds } from 'pages/About/AboutPageTestIds';
import { MapPageTestIds } from 'pages/Map/MapPageTestIds';
import { FooterTestIds } from './components/Footer/FooterTestIds';
import { NavbarTestIds } from './components/Navbar/NavbarTestIds';
import { HomePageTestIds } from './pages/Home/HomePageTestIds';

describe('App', () => {
  it('should make possible reaching /about path', () => {
    const route = Paths.About;

    render(<App />, { route });

    const aboutPage = screen.getByTestId(AboutPageTestIds.Container);
    expect(aboutPage).toBeInTheDocument();
  });

  it('should make possible reaching /map path', () => {
    const route = Paths.Map;

    render(<App />, { route });

    const mapPage = screen.getByTestId(MapPageTestIds.MapPage);
    expect(mapPage).toBeInTheDocument();
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

  it('should render home page', () => {
    render(<App />);

    const homePage = screen.getByTestId(HomePageTestIds.HomePage);

    expect(homePage).toBeInTheDocument();
  });
});
