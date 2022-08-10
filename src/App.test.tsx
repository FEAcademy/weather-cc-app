import userEvent from '@testing-library/user-event';
import App from 'App';
import { Paths } from 'enums/Paths';
import { MapContainer } from 'react-leaflet';
import { Route, Routes } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from 'test-utils';
import { FooterTestIds } from 'components/Footer';
import { NavbarTestIds, NavbarTitles } from 'components/Navbar';
import { AboutPageTestIds } from 'pages/About';
import { CityPage, CityPageTestIds } from 'pages/City';
import { HomePageTestIds } from 'pages/Home';
import { MapPageTestIds } from 'pages/Map';
import { WeatherMarker, WeatherMarkerTestIds } from 'pages/Map/components/WeatherMarker';

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

  it('should make possible reaching dynamic route /city/:city path', () => {
    const route = Paths.City;

    render(<App />, { route });

    const cityPage = screen.getByTestId(CityPageTestIds.Container);
    expect(cityPage).toBeInTheDocument();
  });

  it('should redirect to /map if no city name provided to /city/:city', () => {
    const route = '/city';

    render(<App />, { route });

    const map = screen.getByTestId(MapPageTestIds.MapPage);

    expect(map).toBeInTheDocument();
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

  it('should redirect to /map after link click', async () => {
    const route = Paths.Home;
    render(<App />, { route });

    const mapLink = screen.getByTitle(NavbarTitles.Map);

    const user = userEvent.setup();
    await user.click(mapLink);

    const map = screen.getByTestId(MapPageTestIds.MapPage);

    expect(map).toBeInTheDocument();
  });

  it('should redirect to /home from /about after link click', async () => {
    const route = Paths.About;
    render(<App />, { route });

    const homeLink = screen.getByTitle(NavbarTitles.Home);

    const user = userEvent.setup();
    await user.click(homeLink);

    const home = screen.getByTestId(HomePageTestIds.HomePage);

    expect(home).toBeInTheDocument();
  });

  it('should redirect to /about after link click', async () => {
    render(<App />);

    const aboutLink = screen.getByTitle(NavbarTitles.About);

    const user = userEvent.setup();
    await user.click(aboutLink);

    const about = screen.getByTestId(AboutPageTestIds.Container);

    expect(about).toBeInTheDocument();
  });

  it('should redirect to /city/:city after clicking on marker', async () => {
    render(
      <Routes>
        <Route
          path={Paths.Map}
          element={
            <MapContainer center={[0, 0]} zoom={10} zoomControl={false} scrollWheelZoom={true}>
              <WeatherMarker pos={[0, 0]} cityName={'Wroclaw'} />
            </MapContainer>
          }
        />
        <Route path={Paths.City} element={<CityPage />} />,
      </Routes>,
      { route: Paths.Map },
    );

    const loader = screen.getByTestId(WeatherMarkerTestIds.Loader);

    await waitForElementToBeRemoved(loader).then(async () => {
      const marker = screen.getByTestId(WeatherMarkerTestIds.Container);
      const user = userEvent.setup();
      await user.click(marker);
      const cityPageComponent = await screen.findByTestId(CityPageTestIds.Container);
      expect(cityPageComponent).toBeInTheDocument();
    });
  });
});
