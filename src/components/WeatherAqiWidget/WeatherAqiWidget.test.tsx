import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} so2={weatherSuccessResponse.current.air_quality['so2']} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display aqi data', () => {
    render(<WeatherAqiWidget defraIndex={2} so2={weatherSuccessResponse.current.air_quality['so2']} />);

    const so2 = screen.getByText(/4 μg\/m3/);

    expect(so2).toBeInTheDocument();
  });
});
