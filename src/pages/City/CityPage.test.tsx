import { Route, Routes } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from 'utils';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
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

  it('should render weather aqi widget after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const weatherAqiWidget = await screen.findByTestId(WeatherAqiWidgetTestIds.Container);

    expect(weatherAqiWidget).toBeInTheDocument();
  });

  it('should render and remove widgets loader after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const aqiloader = screen.getByTestId(WeatherAqiWidgetTestIds.Loader);

    expect(aqiloader).toBeInTheDocument();

    await waitForElementToBeRemoved(aqiloader).then(() => {
      expect(aqiloader).not.toBeInTheDocument();
    });
  });

  it('should render weather aqi content properly after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

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
