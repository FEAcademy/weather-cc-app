import userEvent from '@testing-library/user-event';
import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { InputTestIds } from 'components/AutocompleteInput/AutocompleteInputTestIds';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', async () => {
    render(<HomePage />);

    expect(await screen.findByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should render autocomplete input', () => {
    render(<HomePage />);

    const input = screen.getByTestId(InputTestIds.Input);

    expect(input).toBeInTheDocument();
  });

  it('should render autocomplete input options correctly', async () => {
    render(<HomePage />);

    const input = screen.getByRole('combobox');

    userEvent.type(input, 'Wal');

    setTimeout(async () => {
      const option1 = await screen.findByText('Walbrzych');
      const option2 = await screen.findByText('Wroclaw');
      const option3 = await screen.findByText('Warszawa');

      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();
    }, 1000);
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
});
