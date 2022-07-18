import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(<WeatherAqiWidget defraIndex={2} pm2_5={0} />);

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display air quality data', () => {
    render(
      <WeatherAqiWidget
        defraIndex={weatherSuccessResponse.current.air_quality['gb-defra-index']}
        pm2_5={weatherSuccessResponse.current.air_quality.pm2_5}
      />,
    );

    const pm2_5 = screen.getByText(/7 μg\/m3/i);

    expect(pm2_5).toBeInTheDocument();
  });
});
