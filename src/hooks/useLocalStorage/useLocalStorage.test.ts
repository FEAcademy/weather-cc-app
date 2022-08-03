import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from 'hooks/useLocalStorage';

describe('useLocalStorage', () => {
  it('should save item to local storage', () => {
    const key = 'current_location';
    const newValue = 'Warszawa';
    const { result } = renderHook(() => useLocalStorage(key));

    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toEqual(newValue);
    expect(localStorage.getItem(key)).toEqual(newValue);
  });
});
