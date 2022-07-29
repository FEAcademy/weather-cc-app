import { Route, Routes } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from 'utils';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { CityPage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';

const renderCityPageInRoute = () => {
  const route = '/cities/wroclaw';

  render(
    <Routes>
      <Route path="/cities/:city" element={<CityPage />} />
    </Routes>,
    { route },
  );
};

describe('City page', () => {
  it('should render', () => {
    render(<CityPage />);

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });

  it('should display city name after entering /cities/:city route', async () => {
    renderCityPageInRoute();

    const cityNameElement = await screen.findByText(/Wroclaw/i);
    expect(cityNameElement).toBeInTheDocument();
  });

  it('should render and remove widgets loader', async () => {
    renderCityPageInRoute();

    const weatherInfoLoader = screen.getByTestId(WeatherInfoWidgetTestIds.Loader);
    const aqiloader = screen.getByTestId(WeatherAqiWidgetTestIds.Loader);

    expect(weatherInfoLoader).toBeInTheDocument();
    expect(aqiloader).toBeInTheDocument();

    await waitForElementToBeRemoved(weatherInfoLoader).then(() => {
      expect(weatherInfoLoader).not.toBeInTheDocument();
      expect(aqiloader).not.toBeInTheDocument();
    });
  });

  it('should display widgets container', () => {
    render(<CityPage />);

    const widgetsContainer = screen.getByTestId(CityPageTestIds.Widgets);

    expect(widgetsContainer).toBeInTheDocument();
  });

  it('should render weather info widget', async () => {
    renderCityPageInRoute();

    expect(await screen.findByTestId(WeatherInfoWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render weather aqi widget after entering /cities/:city route', async () => {
    renderCityPageInRoute();

    const weatherAqiWidget = await screen.findByTestId(WeatherAqiWidgetTestIds.Container);

    expect(weatherAqiWidget).toBeInTheDocument();
  });

  it('should render weather info widget content properly', async () => {
    renderCityPageInRoute();

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

  it('should render weather aqi content properly after entering /cities/:city route', async () => {
    renderCityPageInRoute();

    const co = await screen.findByText(/155 µg\/m3/i);
    const no2 = await screen.findByText(/4 µg\/m3/i);
    const o3 = await screen.findByText(/119 µg\/m3/i);
    const pm25 = await screen.findByText(/7 μg\/m3/i);
    const pm10 = await screen.findByText(/13 μg\/m3/i);
    const so2 = await screen.findByText(/2 μg\/m3/i);

    expect(pm10).toBeInTheDocument();
    expect(co).toBeInTheDocument();
    expect(no2).toBeInTheDocument();
    expect(o3).toBeInTheDocument();
    expect(pm25).toBeInTheDocument();
    expect(so2).toBeInTheDocument();
  });
});
