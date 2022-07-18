import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { WeatherAqiWidget } from './WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

describe('WeatherAqiWidget', () => {
  it('should render', () => {
    render(
      <WeatherAqiWidget
        defraIndex={2}
        co={weatherSuccessResponse.current.air_quality.co}
        no2={weatherSuccessResponse.current.air_quality.no2}
        pm25={0}
        o3={weatherSuccessResponse.current.air_quality.o3}
        pm10={weatherSuccessResponse.current.air_quality.pm10}
      />,
    );

    const container = screen.getByTestId(WeatherAqiWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should display air quality data', () => {
    render(
      <WeatherAqiWidget
        defraIndex={weatherSuccessResponse.current.air_quality['gb-defra-index']}
        co={weatherSuccessResponse.current.air_quality.co}
        no2={weatherSuccessResponse.current.air_quality.no2}
        o3={weatherSuccessResponse.current.air_quality.o3}
        pm25={weatherSuccessResponse.current.air_quality.pm2_5}
        pm10={weatherSuccessResponse.current.air_quality.pm10}
      />,
    );

    const co = screen.getByText(/155 µg\/m3/i);
    const no2 = screen.getByText(/4 µg\/m3/i);
    const o3 = screen.getByText(/119 µg\/m3/i);
    const pm25 = screen.getByText(/7 μg\/m3/i);
    const pm10 = screen.getByText(/13 µg\/m3/i);

    expect(co).toBeInTheDocument();
    expect(no2).toBeInTheDocument();
    expect(o3).toBeInTheDocument();
    expect(pm25).toBeInTheDocument();
    expect(pm10).toBeInTheDocument();
  });
});
