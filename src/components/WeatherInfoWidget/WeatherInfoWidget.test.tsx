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
      />,
    );

    const humidity = screen.getByText('69%');
    const cloud = screen.getByText('0%');

    expect(humidity).toBeInTheDocument();
    expect(cloud).toBeInTheDocument();
  });
});
