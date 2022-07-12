import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherInfoWidget } from './WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

describe('WeatherInfoWidget', () => {
  it('should render', () => {
    render(<WeatherInfoWidget humidity={weatherSuccessResponse.current.humidity} precip={weatherSuccessResponse.current.precip_mm} />);

    const container = screen.getByTestId(WeatherInfoWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display weather data', () => {
    render(<WeatherInfoWidget humidity={weatherSuccessResponse.current.humidity} precip={weatherSuccessResponse.current.precip_mm} />);

    const humidity = screen.getByText('69%');
    const precip = screen.getByText('0 mm');

    expect(humidity).toBeInTheDocument();
    expect(precip).toBeInTheDocument();
  });
});
