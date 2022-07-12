import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(
      <WeatherInfoWidget
        humidity={weatherSuccessResponse.current.humidity}
        cloud={weatherSuccessResponse.current.cloud}
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
        cloud={weatherSuccessResponse.current.cloud}
        gust={weatherSuccessResponse.current.gust_kph}
        pressure={weatherSuccessResponse.current.pressure_mb}
        precip={weatherSuccessResponse.current.precip_mm}
      />,
    );

    const cloud = screen.getByText('0%');
    const precip = screen.getByText('0 mm');
    const humidity = screen.getByText('69%');
    const pressure = screen.getByText('1011 mb');
    const gust = screen.getByText(/5 km\/h/i);

    expect(cloud).toBeInTheDocument();
    expect(precip).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
    expect(gust).toBeInTheDocument();
  });
});
