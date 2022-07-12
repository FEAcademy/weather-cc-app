import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        gust={weatherSuccessResponse.current.gust_kph}
        pressure={weatherSuccessResponse.current.pressure_mb}
        precip={weatherSuccessResponse.current.precip_mm}
      />,
    );

    const container = screen.getByTestId(WeatherInfoWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display weather data', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        gust={weatherSuccessResponse.current.gust_kph}
        pressure={weatherSuccessResponse.current.pressure_mb}
        precip={weatherSuccessResponse.current.precip_mm}
      />,
    );

    const humidity = screen.getByText('69%');
    const gust = screen.getByText(/5 km\/h/i);
    const precip = screen.getByText('0 mm');
    const pressure = screen.getByText('1011 mb');

    expect(humidity).toBeInTheDocument();
    expect(precip).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
    expect(gust).toBeInTheDocument();
  });
});
