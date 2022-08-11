import { ProvidersCombined } from 'ProvidersCombined';
import { act, renderHook } from 'test-utils';
import { useFavorites } from './FavoritesProvider';

describe('Favorites context', () => {
  beforeEach(() => {
    localStorage.removeItem('favorites');
  });

  const pcimGorny = 'Pcim Górny';
  const pcimDolny = 'Pcim Dolny';

  it('should return null value if no dispatch function invoked', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    expect(result.current?.state.favorites).toBe(null);
    expect(localStorage.getItem('favorites')).toBe(null);
  });
  it('should add single city', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch({ type: 'add', payload: pcimDolny });
    });

    expect(result.current?.state.favorites).toMatchObject([pcimDolny]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([pcimDolny]));
  });

  it('should add two different cities', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch({ type: 'add', payload: pcimDolny });
    });

    act(() => {
      result.current && result.current.dispatch({ type: 'add', payload: pcimGorny });
    });

    expect(result.current?.state.favorites).toMatchObject([pcimDolny, pcimGorny]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([pcimDolny, pcimGorny]));
  });

  it('should not add the same city twice', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch({ type: 'add', payload: pcimDolny });
    });

    act(() => {
      result.current && result.current.dispatch({ type: 'add', payload: pcimDolny });
    });

    expect(result.current?.state.favorites).toMatchObject([pcimDolny]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([pcimDolny]));
  });

  it('should return city from localStorage', () => {
    localStorage.setItem('favorites', JSON.stringify(`["${pcimDolny}"]`));

    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });
    expect(result.current?.state.favorites).toBe(JSON.stringify([pcimDolny]));
  });
});
