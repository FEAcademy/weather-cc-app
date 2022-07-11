import { render, screen } from 'utils';
import { weatherSuccessResponse } from '../../mocks/mockData';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(<WeatherInfoWidget humidity={weatherSuccessResponse.current.humidity} />);

    const container = screen.getByTestId(WeatherInfoWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display weather data', () => {
    render(<WeatherInfoWidget humidity={weatherSuccessResponse.current.humidity} />);

    const humidity = screen.getByText(/69%/i);

    expect(humidity).toBeInTheDocument();
  });
});
