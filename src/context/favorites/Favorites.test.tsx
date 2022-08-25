import { ProvidersCombined } from 'ProvidersCombined';
import { act, renderHook } from 'test-utils';
import { add, remove } from './Actions';
import { useFavorites } from './FavoritesProvider';

describe('Favorites context', () => {
  const city1 = 'Pcim Górny';
  const city2 = 'Pcim Dolny';

  it('should return empty array value if no dispatch function invoked', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    expect(result.current?.state.favorites).toMatchObject([]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([]));
  });

  it('should add single city', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(add(city2));
    });

    expect(result.current?.state.favorites).toMatchObject([city2]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([city2]));
  });

  it('should add two different cities', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(add(city2));
    });

    act(() => {
      result.current && result.current.dispatch(add(city1));
    });

    expect(result.current?.state.favorites).toMatchObject([city2, city1]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([city2, city1]));
  });

  it('should remove single city', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });

    act(() => {
      result.current && result.current.dispatch(add(city1));
      result.current && result.current.dispatch(add(city2));
    });

    expect(result.current?.state.favorites).toMatchObject([city1, city2]);

    act(() => {
      result.current && result.current.dispatch(remove(city1));
    });

    expect(result.current?.state.favorites).toMatchObject([city2]);
    expect(localStorage.getItem('favorites')).toBe(JSON.stringify([city2]));
  });

  it('should return cities from localStorage', () => {
    const arr = [city2, city1];
    localStorage.setItem('favorites', JSON.stringify(arr));

    const { result } = renderHook(() => useFavorites(), { wrapper: ProvidersCombined });
    expect(result.current?.state.favorites).toMatchObject(arr);
  });
});
