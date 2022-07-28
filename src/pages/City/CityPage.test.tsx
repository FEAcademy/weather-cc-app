import { Route, Routes } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from 'utils';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { CityPage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';

describe('City page', () => {
  it('should render', () => {
    render(<CityPage />);

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });

  it('should display city name after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const cityNameElement = await screen.findByText(/Wroclaw/i);
    expect(cityNameElement).toBeInTheDocument();
  });

  it('should render and remove widgets loader', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const weatherInfoLoader = screen.getByTestId(WeatherInfoWidgetTestIds.Loader);

    expect(weatherInfoLoader).toBeInTheDocument();

    await waitForElementToBeRemoved(weatherInfoLoader).then(() => {
      expect(weatherInfoLoader).not.toBeInTheDocument();
    });
  });

  it('should display widgets container', () => {
    render(<CityPage />);

    const widgetsContainer = screen.getByTestId(CityPageTestIds.Widgets);

    expect(widgetsContainer).toBeInTheDocument();
  });

  it('should render weather info widget', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    expect(await screen.findByTestId(WeatherInfoWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render weather info widget content properly', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const cloud = await screen.findByText(/0%/);
    const humidity = await screen.findByText(/69%/);
    const windSpeed = await screen.findByText(/7 km\/h/);
    const precip = await screen.findByText(/0 mm/i);
    const pressure = await screen.findByText(/1011 mb/i);
    const gust = await screen.findByText(/5 km\/h/i);

    expect(cloud).toBeInTheDocument();
    expect(precip).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
    expect(gust).toBeInTheDocument();
  });
});
