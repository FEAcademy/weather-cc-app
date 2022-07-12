import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        windSpeed={weatherSuccessResponse.current.wind_kph}
      />,
    );
    const container = screen.getByTestId(WeatherInfoWidgetTestIds.Container);
    expect(container).toBeInTheDocument();
  });
  it('should display weather data', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        windSpeed={weatherSuccessResponse.current.wind_kph}
      />,
    );

    const humidity = screen.getByText('69%');
    const windSpeed = screen.getByText(/7 km\/h/);

    expect(humidity).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });
});
