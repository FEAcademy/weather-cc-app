import hooks from 'api/services/Weather';
import { Paths } from 'enums/Paths';
import { UseQueryResult } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from 'test-utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget';
import { Weather } from 'models/Weather';
import { MapPage, MapPageTestIds } from 'pages/Map';
import { CityPage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameLoaderTestIds } from './components/CityNameWidget/components/CityNameLoader';
import { NearestCitiesWeatherWidgetTestIds } from './components/NearestCitiesWeatherWidget';

const renderCityPageInRoute = () => {
  const route = '/city/Wrocław,Poland';

  render(
    <Routes>
      <Route path={Paths.City} element={<CityPage />} />
    </Routes>,
    { route },
  );
};

describe('City page', () => {
  it('should render', () => {
    renderCityPageInRoute();

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });

  it('should display city name after entering /city/:city route', async () => {
    renderCityPageInRoute();

    const cityNameElement = await screen.findByText(/Wroclaw/i);
    expect(cityNameElement).toBeInTheDocument();
  });

  it('should render and remove city name loader', async () => {
    renderCityPageInRoute();

    const cityNameLoader = await screen.findByTestId(CityNameLoaderTestIds.Loader);

    expect(cityNameLoader).toBeInTheDocument();

    await waitForElementToBeRemoved(cityNameLoader).then(() => {
      expect(cityNameLoader).not.toBeInTheDocument();
    });
  });

  it('should render and remove widgets loader', async () => {
    renderCityPageInRoute();

    const weatherInfoLoader = screen.getByTestId(WeatherInfoWidgetTestIds.Loader);
    const temperatureWidgetLoader = screen.getByTestId(TemperatureWidgetTestIds.Loader);
    const aqiloader = screen.getByTestId(WeatherAqiWidgetTestIds.Loader);

    expect(weatherInfoLoader).toBeInTheDocument();
    expect(temperatureWidgetLoader).toBeInTheDocument();
    expect(aqiloader).toBeInTheDocument();

    await waitForElementToBeRemoved(weatherInfoLoader).then(() => {
      expect(weatherInfoLoader).not.toBeInTheDocument();
      expect(temperatureWidgetLoader).not.toBeInTheDocument();
      expect(aqiloader).not.toBeInTheDocument();
    });
  });

  it('should display widgets container', () => {
    renderCityPageInRoute();
    const widgetsContainer = screen.getByTestId(CityPageTestIds.Widgets);

    expect(widgetsContainer).toBeInTheDocument();
  });

  it('should render weather info widget', async () => {
    renderCityPageInRoute();

    const weatherInfoWidget = await screen.findByTestId(WeatherInfoWidgetTestIds.Container);

    expect(weatherInfoWidget).toBeInTheDocument();
  });

  it('should render temperature widget', async () => {
    renderCityPageInRoute();

    expect(await screen.findByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render weather aqi widget', async () => {
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

  it('should render temperature widget content properly after entering /city/:city route', async () => {
    renderCityPageInRoute();

    const weatherIcon = await screen.findByAltText('Weather widget icon');
    const description = await screen.findByText(/Sunny/i);
    const currentTemperature = await screen.findByTestId(TemperatureWidgetTestIds.Temperature);
    const feelslikeTemperature = await screen.findByText(/26/i);

    expect(weatherIcon).toHaveAttribute('src', '//cdn.weatherapi.com/weather/128x128/day/113.png');
    expect(description).toBeInTheDocument();
    expect(currentTemperature).toBeInTheDocument();
    expect(feelslikeTemperature).toBeInTheDocument();
  });

  it('should render weather aqi content properly after entering /city/:city route', async () => {
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

  it('should render shortcuts title', () => {
    renderCityPageInRoute();

    const shortcutsTitle = screen.getByText(/nearest/i);

    expect(shortcutsTitle).toBeInTheDocument();

    jest.clearAllMocks();
  });

  it('should render loader container for shortcuts widgets', async () => {
    renderCityPageInRoute();

    const loaderContainer = screen.getByTestId(NearestCitiesWeatherWidgetTestIds.Widget);

    expect(loaderContainer).toBeInTheDocument();
  });
  it('should redirect to /map if no data returned for city name', async () => {
    const route = '/city/aaaa';
    const spy = jest
      .spyOn(hooks, 'useLocation')
      .mockReturnValue({ data: undefined, isError: true, isLoading: false } as UseQueryResult<Weather, Error>);

    render(
      <Routes>
        <Route path={Paths.City} element={<CityPage />} />
        <Route path={Paths.Map} element={<MapPage />} />
      </Routes>,
      { route },
    );

    const map = await screen.findByTestId(MapPageTestIds.MapPage);

    expect(map).toBeInTheDocument();
    spy.mockRestore();
  });
});
