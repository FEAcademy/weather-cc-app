import { renderHook, act } from 'test-utils';
import { useFavorites } from './useFavorites';

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.removeItem('favorites');
  });

  it('should save city name to local storage', () => {
    const newValue = 'Katowice';
    const key = 'favorites';
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.setFavorites(newValue);
    });

    expect(result.current.favorites).toEqual([newValue]);
    expect(localStorage.getItem(key)).toEqual(`["${newValue}"]`);
  });

  it('should save two city names to local storage', () => {
    const firstValue = 'Katowice';
    const secondValue = 'Pcim Dolny';
    const key = 'favorites';
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.setFavorites(firstValue);
    });

    act(() => {
      result.current.setFavorites(secondValue);
    });

    expect(result.current.favorites).toEqual([firstValue, secondValue]);
    expect(localStorage.getItem(key)).toEqual(`["${firstValue}","${secondValue}"]`);
  });

  it('should not save the same city name twice to local storage', () => {
    const newValue = 'Katowice';
    const key = 'favorites';
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.setFavorites(newValue);
    });

    act(() => {
      result.current.setFavorites(newValue);
    });

    expect(result.current.favorites).not.toEqual([newValue, newValue]);
    expect(localStorage.getItem(key)).not.toEqual(`["${newValue}","${newValue}"]`);
  });
});
