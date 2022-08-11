import { places } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { CityWeatherShortcutTestIds } from 'components/CityWeatherShortcut';
import { NearestCitiesWeatherWidget } from './NearestCitiesWeatherWidget';
import { NearestCitiesWeatherWidgetTestIds } from './NearestCitiesWeatherWidgetTestIds';

describe('NearestCitiesWeatherWidget', () => {
  it('should render', async () => {
    render(<NearestCitiesWeatherWidget citiesData={places.elements} />);

    const widget = screen.getByTestId(NearestCitiesWeatherWidgetTestIds.Widget);

    expect(widget).toBeInTheDocument();
  });

  it('should render 6 shortcuts widgets', async () => {
    render(<NearestCitiesWeatherWidget citiesData={[...places.elements, ...places.elements]} />);

    const loaders = screen.getAllByTestId(CityWeatherShortcutTestIds.Widget);

    expect(loaders.length).toEqual(6);
  });
});
