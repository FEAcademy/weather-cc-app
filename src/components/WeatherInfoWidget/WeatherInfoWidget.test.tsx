import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        windDir={weatherSuccessResponse.current.wind_dir}
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
        windDir={weatherSuccessResponse.current.wind_dir}
        windSpeed={weatherSuccessResponse.current.wind_kph}
      />,
    );

    const humidity = screen.getByText('69%');
    const windDirection = screen.getByText(/SSE/i);
    const windSpeed = screen.getByText(/7 km\/h/);

    expect(humidity).toBeInTheDocument();
    expect(windDirection).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });
});
