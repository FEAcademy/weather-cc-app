import { places } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { CityWeatherShortcut } from './CityWeatherShortcut';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';

describe('CityWeatherShortcut', () => {
  it('should render', async () => {
    render(<CityWeatherShortcut cityData={places.elements[0]} />);

    const shortcutWidget = screen.getByTestId(CityWeatherShortcutTestIds.Widget);

    expect(shortcutWidget).toBeInTheDocument();
  });

  it('should render content properly', async () => {
    render(<CityWeatherShortcut cityData={places.elements[0]} />);

    const temperature = screen.getByText(/28/i);
    const icon = screen.getByRole('img');
    const city = screen.getByText(/Kalisz/i);

    expect(temperature).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(city).toBeInTheDocument();
  });
});
