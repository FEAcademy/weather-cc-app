import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render temperature widget', async () => {
    localStorage.setItem('current_location', 'Warszawa');
    render(<HomePage />);

    expect(await screen.findByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render temperature widget content properly', async () => {
    localStorage.setItem('current_location', 'Warszawa');
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
    localStorage.setItem('current_location', 'Warszawa');
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

  it('should not display widgets when savedLocation is not provided', () => {
    localStorage.removeItem('current_location');
    render(<HomePage />);

    const widgetsContainer = screen.getByTestId(HomePageTestIds.Widgets);

    expect(widgetsContainer).toBeEmptyDOMElement();
  });
});
