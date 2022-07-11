import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        pressure={weatherSuccessResponse.current.pressure_mb}
      />,
    );

    const container = screen.getByTestId(WeatherInfoWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display weather data', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        pressure={weatherSuccessResponse.current.pressure_mb}
      />,
    );

    const humidity = screen.getByText('69%');
    const pressure = screen.getByText('1011 mb');

    expect(humidity).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
  });
});
