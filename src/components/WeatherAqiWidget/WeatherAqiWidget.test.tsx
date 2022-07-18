import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} pm10={weatherSuccessResponse.current.air_quality.pm10} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should render proper air quality data', () => {
    render(<WeatherAqiWidget defraIndex={2} pm10={weatherSuccessResponse.current.air_quality.pm10} />);

    const pm10 = screen.getByText(/7 µg\/m3/i);

    expect(pm10).toBeInTheDocument();
  });
});
