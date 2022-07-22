import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen, waitForElementToBeRemoved } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render and remove widgets loader', async () => {
    render(<HomePage />);

    const temperatureLoader = screen.getByTestId(TemperatureWidgetTestIds.Loader);
    const infoLoader = screen.getByTestId(WeatherInfoWidgetTestIds.Loader);
    const aqiloader = screen.getByTestId(WeatherAqiWidgetTestIds.Loader);
    expect(temperatureLoader).toBeInTheDocument();
    expect(aqiloader).toBeInTheDocument();

    await waitForElementToBeRemoved(temperatureLoader).then(() => {
      expect(temperatureLoader).not.toBeInTheDocument();
      expect(infoLoader).not.toBeInTheDocument();
      expect(aqiloader).not.toBeInTheDocument();
    });
  });

  it('should render temperature widget', async () => {
    render(<HomePage />);

    expect(await screen.findByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render temperature widget content properly', async () => {
    render(<HomePage />);

    const weatherIcon = await screen.findByAltText('Weather widget icon');
    const description = await screen.findByText(/Sunny/i);
    const currentTemperature = await screen.findByText(/25/i);
    const feelslikeTemperature = await screen.findByText(/feels like/i);

    expect(weatherIcon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
    expect(description).toBeInTheDocument();
    expect(currentTemperature).toBeInTheDocument();
    expect(feelslikeTemperature).toBeInTheDocument();
  });

  it('should render weather info widget', async () => {
    render(<HomePage />);

    const weatherInfoWidget = await screen.findByTestId(WeatherInfoWidgetTestIds.Container);

    expect(weatherInfoWidget).toBeInTheDocument();
  });

  it('should render weather info widget content properly', async () => {
    render(<HomePage />);

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

  it('should render weather aqi widget', async () => {
    render(<HomePage />);

    const weatherAqiWidget = await screen.findByTestId(WeatherAqiWidgetTestIds.Container);

    expect(weatherAqiWidget).toBeInTheDocument();
  });

  it('should render weather aqi content properly', async () => {
    render(<HomePage />);

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
