import * as favoriteHook from 'context/favorites/FavoritesProvider';
import { render, screen } from 'test-utils';
import { CityWeatherShortcutTestIds } from 'components/CityWeatherShortcut';
import { FavoritesCitiesWeatherWidget } from './FavoritesCitiesWeatherWidget';
import { FavoritesCitiesWeatherWidgetTestIds } from './FavoritesCitiesWeatherWidgetTestIds';

describe('FavoritesCitiesWeatherWidget', () => {
  it('should render', () => {
    render(<FavoritesCitiesWeatherWidget />);

    const container = screen.getByTestId(FavoritesCitiesWeatherWidgetTestIds.Container);

    expect(container).toBeInTheDocument();
  });
  it('should display content when favoritecities array is not empty', async () => {
    jest.spyOn(favoriteHook, 'useFavorites').mockReturnValue({
      dispatch: jest.fn(),
      state: { favorites: ['Wroclaw,Poland', 'Katowice,Poland'] },
      checkIfIsFavorite: jest.fn(),
    });
    render(<FavoritesCitiesWeatherWidget />);

    const title = screen.getByText(/favorites/i);
    const favoriteCitiesWidgets = await screen.findAllByTestId(CityWeatherShortcutTestIds.Widget);

    expect(title).toBeInTheDocument();
    expect(favoriteCitiesWidgets.length).toBe(2);
    jest.restoreAllMocks();
  });
  it('should not display content when favorite cities array is empty', () => {
    jest.spyOn(favoriteHook, 'useFavorites').mockReturnValue({
      dispatch: jest.fn(),
      state: { favorites: [] },
      checkIfIsFavorite: jest.fn(),
    });
    render(<FavoritesCitiesWeatherWidget />);

    const title = screen.queryByText(/favorites/i);
    const favoriteCitiesWidgets = screen.queryAllByTestId(CityWeatherShortcutTestIds.Widget);

    expect(title).not.toBeInTheDocument();
    expect(favoriteCitiesWidgets.length).toBe(0);
  });
});
