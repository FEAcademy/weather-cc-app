import { render, screen } from 'test-utils';
import { CityWeatherShortcutLoaderTestIds } from 'components/CityWeatherShortcut/components/CityWeatherShortcutLoader';
import { NearestCitiesWeatherWidget } from './NearestCitiesWeatherWidget';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

describe('NearestCitiesWeatherWidget', () => {
  it('should render', () => {
    render(<NearestCitiesWeatherWidget loading={false} cityName={undefined} />);

    const widget = screen.getByTestId(NearestCitiesWeatherWidgetTestIds.Widget);

    expect(widget).toBeInTheDocument();
  });

  it('should render loadrs', async () => {
    render(<NearestCitiesWeatherWidget loading={true} cityName={undefined} />);

    const loaders = await screen.findAllByTestId(CityWeatherShortcutLoaderTestIds.Loader);

    expect(loaders.length).toBe(6);
  });
});
