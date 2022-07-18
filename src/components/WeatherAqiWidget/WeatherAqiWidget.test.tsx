import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} co={weatherSuccessResponse.current.air_quality.co} pm25={0} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display air quality data', () => {
    render(
      <WeatherAqiWidget
        defraIndex={weatherSuccessResponse.current.air_quality['gb-defra-index']}
        co={weatherSuccessResponse.current.air_quality.co}
        pm25={weatherSuccessResponse.current.air_quality.pm2_5}
      />,
    );

    const co = screen.getByText(/155 µg\/m3/i);
    const pm25 = screen.getByText(/7 μg\/m3/i);

    expect(co).toBeInTheDocument();
    expect(pm25).toBeInTheDocument();
  });
});
