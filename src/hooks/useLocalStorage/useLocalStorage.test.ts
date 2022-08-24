import { useLocalStorage } from 'hooks/useLocalStorage';
import { renderHook, act } from 'test-utils';

describe('useLocalStorage', () => {
  it('should save item to local storage', () => {
    const key = 'current_location';
    const newValue = 'Warszawa';
    const { result } = renderHook(() => useLocalStorage<string>(key));

    act(() => {
      result.current[1](newValue);
    });

    expect(result.current[0]).toEqual(newValue);
    expect(JSON.parse(localStorage.getItem(key) as string)).toEqual(newValue);
  });

  it('should save array item to local storage', () => {
    const key = 'current_location';
    const newValue = ['Warszawa', 'Pcim Dolny'];
    const { result } = renderHook(() => useLocalStorage<string[]>(key));

    act(() => {
      result.current[1](newValue);
    });

    expect(result.current[0]).toEqual(newValue);
    expect(JSON.parse(localStorage.getItem(key) as string)).toEqual(newValue);
  });

  it('should save objet to local storage', () => {
    const key = 'current_location';
    const newValue = { value1: 'Warszawa', value2: 12 };
    const { result } = renderHook(() => useLocalStorage<{ value1: string; value2: number }>(key));

    act(() => {
      result.current[1](newValue);
    });

    expect(result.current[0]).toEqual(newValue);
    expect(JSON.parse(localStorage.getItem(key) as string)).toEqual(newValue);
  });
});
