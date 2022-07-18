import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} co={weatherSuccessResponse.current.air_quality.co} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display air quality data', () => {
    render(<WeatherAqiWidget defraIndex={2} co={weatherSuccessResponse.current.air_quality.co} />);

    const co = screen.getByText(/155 µg\/m3/i);

    expect(co).toBeInTheDocument();
  });
});
