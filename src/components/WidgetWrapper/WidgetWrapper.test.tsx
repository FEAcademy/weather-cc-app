import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { WidgetWrapper } from './WidgetWrapper';

describe('Widget wrapper', () => {
  {
    it('should render loader', async () => {
      render(<WidgetWrapper data={undefined} isLoading={true} data-testid={'test'} />);

      const weatherInfoLoader = screen.getByTestId(WeatherInfoWidgetTestIds.Loader);
      const temperatureWidgetLoader = screen.getByTestId(TemperatureWidgetTestIds.Loader);
      const aqiloader = screen.getByTestId(WeatherAqiWidgetTestIds.Loader);

      expect(weatherInfoLoader).toBeInTheDocument();
      expect(temperatureWidgetLoader).toBeInTheDocument();
      expect(aqiloader).toBeInTheDocument();
    });

    it('should render weather info widget', async () => {
      render(<WidgetWrapper data={weatherSuccessResponse} isLoading={false} data-testid={'test'} />);

      expect(await screen.findByTestId(WeatherInfoWidgetTestIds.Container)).toBeInTheDocument();
    });

    it('should render temperature widget', async () => {
      render(<WidgetWrapper data={weatherSuccessResponse} isLoading={false} data-testid={'test'} />);

      const temperatureWidget = await screen.findByTestId(TemperatureWidgetTestIds.Container);

      expect(temperatureWidget).toBeInTheDocument();
    });

    it('should render weather aqi widget', async () => {
      render(<WidgetWrapper data={weatherSuccessResponse} isLoading={false} data-testid={'test'} />);

      const weatherAqiWidget = await screen.findByTestId(WeatherAqiWidgetTestIds.Container);

      expect(weatherAqiWidget).toBeInTheDocument();
    });
  }
});
