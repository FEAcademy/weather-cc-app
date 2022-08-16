import { render, screen } from 'test-utils';
import { CityWeatherShortcut } from './CityWeatherShortcut';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';

describe('CityWeatherShortcut', () => {
  it('should render', async () => {
    render(<CityWeatherShortcut cityName="Wroclaw" />);

    const shortcutWidget = screen.getByTestId(CityWeatherShortcutTestIds.Widget);

    expect(shortcutWidget).toBeInTheDocument();
  });
});
