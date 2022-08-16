import { ADD } from 'context/favorites';
import { useFavorites } from 'context/favorites/FavoritesProvider';
import { ProvidersCombined } from 'ProvidersCombined';
import { act, render, renderHook, screen } from 'test-utils';
import { theme } from 'theme';
import { FavoritesButton } from './FavoritesButton';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

describe('FavoritesButton', () => {
  it('should render', () => {
    render(<FavoritesButton cityName="Wroclaw" />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toBeInTheDocument();
  });

  it('should have gray color when city is not favorite', () => {
    render(<FavoritesButton cityName="Wroclaw" />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle(`color: ${theme.colors.text}`);
  });

  it('should change color when city is favorite', () => {
    const city1 = 'Pcim Górny';

    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(ADD(city1));
    });

    render(<FavoritesButton cityName={city1} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle('color: #DC5F44');
  });
});
