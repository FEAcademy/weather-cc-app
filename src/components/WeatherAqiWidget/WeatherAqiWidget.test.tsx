import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} no2={weatherSuccessResponse.current.air_quality.no2} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });
  it('should display rounded air quality data', () => {
    render(<WeatherAqiWidget defraIndex={2} no2={weatherSuccessResponse.current.air_quality.no2} />);
    const no2 = screen.getByText('4 \u00B5m/m3');
    expect(no2).toBeInTheDocument();
  });
});
