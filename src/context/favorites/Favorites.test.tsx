import { ProvidersCombined } from 'ProvidersCombined';
import { act, renderHook } from 'test-utils';
import { ADD } from './Actions';
import { useFavorites } from './FavoritesProvider';

describe('Favorites context', () => {
  beforeEach(() => {
    localStorage.removeItem('favorites');
  });

  const pcimGorny = 'Pcim Górny';
  const pcimDolny = 'Pcim Dolny';

  it('should return empty array value if no dispatch function invoked', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    expect(result.current?.state.favorites).toMatchObject([]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([]));
  });

  it('should add single city', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(ADD(pcimDolny));
    });

    expect(result.current?.state.favorites).toMatchObject([pcimDolny]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([pcimDolny]));
  });

  it('should add two different cities', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(ADD(pcimDolny));
    });

    act(() => {
      result.current && result.current.dispatch(ADD(pcimGorny));
    });

    expect(result.current?.state.favorites).toMatchObject([pcimDolny, pcimGorny]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([pcimDolny, pcimGorny]));
  });

  it('should return cities from localStorage', () => {
    const arr = [pcimDolny, pcimGorny];
    localStorage.setItem('favorites', JSON.stringify(arr));

    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });
    expect(result.current?.state.favorites).toMatchObject(arr);
  });
});
