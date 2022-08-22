import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { CityWeatherShortcutTestIds } from 'components/CityWeatherShortcut';
import { CityWeatherShortcutLoaderTestIds } from 'components/CityWeatherShortcut/components/CityWeatherShortcutLoader';
import { NearestCitiesWeatherWidget } from './NearestCitiesWeatherWidget';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

const { name, lat, lon } = weatherSuccessResponse.location;

describe('NearestCitiesWeatherWidget', () => {
  it('should render', () => {
    render(<NearestCitiesWeatherWidget cityName={name} coordinates={`${lat},${lon}`} />);

    const widget = screen.getByTestId(NearestCitiesWeatherWidgetTestIds.Widget);

    expect(widget).toBeInTheDocument();
  });

  it('should render loaders', async () => {
    render(<NearestCitiesWeatherWidget cityName={name} coordinates={`${lat},${lon}`} />);

    const loaders = await screen.findAllByTestId(CityWeatherShortcutLoaderTestIds.Loader);

    expect(loaders.length).toBe(6);
  });
  it('should render shortcuts', async () => {
    render(<NearestCitiesWeatherWidget cityName={name} coordinates={`${lat},${lon}`} />);
    const nearestCityShortcuts = await screen.findAllByTestId(CityWeatherShortcutTestIds.Widget);

    expect(nearestCityShortcuts.length).toBe(3);
  });
});
