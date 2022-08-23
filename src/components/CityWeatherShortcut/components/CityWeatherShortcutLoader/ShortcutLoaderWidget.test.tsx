import { render, screen } from 'test-utils';
import { CityWeatherShortcutLoader } from './CityWeatherShortcutLoader';
import { CityWeatherShortcutLoaderTestIds } from './CityWeatherShortcutLoaderTestIds';

describe('CityWeatherShortcutLoader', () => {
  it('should render', () => {
    render(<CityWeatherShortcutLoader />);

    const container = screen.getByTestId(CityWeatherShortcutLoaderTestIds.Loader);
    expect(container).toBeInTheDocument();
  });
});
