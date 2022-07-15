import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string): [string, (value: string) => void] => {
  const [localValue, setLocalValue] = useState('');

  const getItem = useCallback(() => {
    const value = localStorage.getItem(key);
    return value ?? '';
  }, [key]);

  const setItem = useCallback(
    (value: string) => {
      localStorage.setItem(key, JSON.stringify(value));
      setLocalValue(value);
    },
    [key],
  );

  useEffect(() => {
    setLocalValue(getItem());
  }, [getItem]);

  return [localValue, setItem];
};

export { useLocalStorage };
