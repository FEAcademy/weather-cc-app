import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} o3={weatherSuccessResponse.current.air_quality.o3} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });
  it('should display air quality data', () => {
    render(<WeatherAqiWidget defraIndex={2} o3={weatherSuccessResponse.current.air_quality.o3} />);

    const o3 = screen.getByText(/119 µg\/m3/i);

    expect(o3).toBeInTheDocument();
  });
});
