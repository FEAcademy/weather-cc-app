import { weatherDataInCity } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { ShortcutWidgetTestIds } from 'components/ShortcutWidget';
import { ShortcutWidgetLoaderTestIds } from 'components/ShortcutWidgetLoader';
import { Weather } from 'models/Weather';
import { ShortcutsWrapper } from './ShortcutsWrapper';

const weatherInCities: Weather[] = [
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
  weatherDataInCity,
];

describe('ShortcutsWrapper', () => {
  it('should render 6 loaders', async () => {
    render(<ShortcutsWrapper data={undefined} isLoading={true} />);

    const loaders = screen.getAllByTestId(ShortcutWidgetLoaderTestIds.Loader);

    expect(loaders.length).toEqual(6);
  });

  it('should render 6 shortcuts widgets', async () => {
    render(<ShortcutsWrapper data={weatherInCities} isLoading={false} />);

    const loaders = screen.getAllByTestId(ShortcutWidgetTestIds.Widget);

    expect(loaders.length).toEqual(6);
  });
});
