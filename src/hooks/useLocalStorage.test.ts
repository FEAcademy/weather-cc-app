import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from 'hooks/useLocalStorage';

describe('useLocalStorage', () => {
  it('should return default value when no local item provided', () => {
    const key = 'current_location';
    const newValue = 'Warszawa';

    const { result } = renderHook(() => useLocalStorage(key, newValue));

    expect(result.current[0]).toEqual(newValue);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(newValue));
  });

  it('should save item to local storage', () => {
    const key = 'current_location';
    const newValue = 'Warszawa';
    const { result } = renderHook(() => useLocalStorage(key, 'Katowice'));

    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toEqual(newValue);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(newValue));
  });
});
