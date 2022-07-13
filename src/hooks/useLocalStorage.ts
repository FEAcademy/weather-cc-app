import { useCallback, useMemo } from 'react';

const useLocalStorage = (key: string): [string, (value: string) => void] => {
  const getItem = useCallback(() => {
    const resp = localStorage.getItem(key);
    return resp ?? '';
  }, [key]);

  const setItem = useCallback(
    (value: string) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  const localValue = useMemo(() => getItem(), [getItem]);

  return [localValue, setItem];
};

export { useLocalStorage };
