import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import { FavoritesButton } from 'components/FavoritesButton';
import { CityWeatherShortcut } from './CityWeatherShortcut';
import { CityWeatherShortcutTestIds } from './CityWeatherShortcutTestIds';
import { CityWeatherShortcutLoaderTestIds } from './components/CityWeatherShortcutLoader';

describe('CityWeatherShortcut', () => {
  it('should render loader when data about weather is not yet retrieved', () => {
    render(<CityWeatherShortcut cityName="Wroclaw" button={<FavoritesButton cityName="Wroclaw" size={20} />} />);

    const shortcutWidget = screen.getByTestId(CityWeatherShortcutLoaderTestIds.Loader);

    expect(shortcutWidget).toBeInTheDocument();
  });

  it('should render weather widget shortcut', async () => {
    render(<CityWeatherShortcut cityName="Wroclaw" button={<FavoritesButton cityName="Wroclaw" size={20} />} />);

    const shortcutWidget = await screen.findByTestId(CityWeatherShortcutTestIds.Widget);

    expect(shortcutWidget).toBeInTheDocument();
  });

  it('should render data correctly', async () => {
    render(<CityWeatherShortcut cityName="Wroclaw" button={<FavoritesButton cityName="Wroclaw" size={20} />} />);

    const weatherIcon = await screen.findByAltText('weather image');
    const cityName = await screen.findByText(/Wroclaw/i);
    const currentTemperature = await screen.findByText(/25/i);

    expect(weatherIcon).toHaveAttribute('src', '//cdn.weatherapi.com/weather/128x128/day/113.png');
    expect(currentTemperature).toBeInTheDocument();
    expect(cityName).toBeInTheDocument();
  });
  it('should checks if url pathname changed from "/" to "/city/Katowice"', async () => {
    render(<CityWeatherShortcut cityName="Katowice" button={<FavoritesButton cityName="Wroclaw" size={20} />} />);

    expect(window.location.pathname).toBe('/');

    const LinkContainer = await screen.findByTestId(CityWeatherShortcutTestIds.Widget);

    const user = userEvent.setup();
    await user.click(LinkContainer);

    expect(window.location.pathname).toBe('/city/Katowice');
  });
});
