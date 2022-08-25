import userEvent from '@testing-library/user-event';
import { add } from 'context/favorites';
import { useFavorites } from 'context/favorites/FavoritesProvider';
import { ButtonTypes } from 'enums/ButtonTypes';
import { ProvidersCombined } from 'ProvidersCombined';
import { act, render, renderHook, screen } from 'test-utils';
import { theme } from 'theme';
import { FavoritesButton } from './FavoritesButton';
import { FavoritesButtonTestIds } from './FavoritesButtonTestIds';

describe('FavoritesButton', () => {
  it('should render', () => {
    render(<FavoritesButton cityName="Wroclaw" size={13} type={ButtonTypes.Heart} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toBeInTheDocument();
  });

  it('should have gray color when city is not favorite', () => {
    render(<FavoritesButton cityName="Wroclaw" size={13} type={ButtonTypes.Heart} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle(`color: ${theme.colors.text}`);
  });

  it('should change color when city is favorite', () => {
    const city1 = 'Pcim Górny';

    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(add(city1));
    });

    render(<FavoritesButton cityName={city1} size={13} type={ButtonTypes.Heart} />);

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle('color: #DC5F44');
  });

  it('should add to favorites', async () => {
    const city1 = 'Pcim Górny';

    render(<FavoritesButton cityName={city1} size={13} type={ButtonTypes.Heart} />);
    const user = userEvent.setup();

    const button = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(button).toHaveStyle(`color: ${theme.colors.text}`);

    await user.click(button);

    expect(button).toHaveStyle('color: #DC5F44');
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([city1]));
  });
});
