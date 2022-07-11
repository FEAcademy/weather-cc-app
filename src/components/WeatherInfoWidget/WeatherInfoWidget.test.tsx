import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(<WeatherInfoWidget humidity={weatherSuccessResponse.current.humidity} gust={weatherSuccessResponse.current.gust_kph} />);

    const container = screen.getByTestId(WeatherInfoWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display weather data', () => {
    render(<WeatherInfoWidget humidity={weatherSuccessResponse.current.humidity} gust={weatherSuccessResponse.current.gust_kph} />);

    const humidity = screen.getByText('69%');
    const gust = screen.getByText('5.4 km/h');

    expect(humidity).toBeInTheDocument();
    expect(gust).toBeInTheDocument();
  });
});
