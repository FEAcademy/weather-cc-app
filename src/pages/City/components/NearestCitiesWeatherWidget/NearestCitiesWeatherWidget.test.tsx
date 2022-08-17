import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { CityWeatherShortcutTestIds } from 'components/CityWeatherShortcut';
import { CityWeatherShortcutLoaderTestIds } from 'components/CityWeatherShortcut/components/CityWeatherShortcutLoader';
import { NearestCitiesWeatherWidget } from './NearestCitiesWeatherWidget';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

describe('NearestCitiesWeatherWidget', () => {
  it('should render', () => {
    render(
      <NearestCitiesWeatherWidget
        cityName={weatherSuccessResponse.location.name}
        coordinates={`${weatherSuccessResponse.location.lat},${weatherSuccessResponse.location.lon}`}
      />,
    );

    const widget = screen.getByTestId(NearestCitiesWeatherWidgetTestIds.Widget);

    expect(widget).toBeInTheDocument();
  });

  it('should render loaders', async () => {
    render(
      <NearestCitiesWeatherWidget
        cityName={weatherSuccessResponse.location.name}
        coordinates={`${weatherSuccessResponse.location.lat},${weatherSuccessResponse.location.lon}`}
      />,
    );

    const loaders = await screen.findAllByTestId(CityWeatherShortcutLoaderTestIds.Loader);

    expect(loaders.length).toBe(6);
  });
  it('should render shortcuts', async () => {
    render(
      <NearestCitiesWeatherWidget
        cityName={weatherSuccessResponse.location.name}
        coordinates={`${weatherSuccessResponse.location.lat},${weatherSuccessResponse.location.lon}`}
      />,
    );
    const nearestCityShortcuts = await screen.findAllByTestId(CityWeatherShortcutTestIds.Widget);

    expect(nearestCityShortcuts.length).toBe(3);
  });
});
