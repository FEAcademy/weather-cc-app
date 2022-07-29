import React from 'react';
import { weatherSuccessResponse } from '../../mocks/mockData';
import { render, screen } from '../../utils';
import { TemperatureWidgetTestIds } from '../TemperatureWidget';
import { WeatherAqiWidgetTestIds } from '../WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherInfoWidgetTestIds } from '../WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { WidgetWrapper } from './WidgetWrapper';

describe('Widget wrapper', () => {
  {
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
