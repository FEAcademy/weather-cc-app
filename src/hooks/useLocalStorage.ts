import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string): [string, (value: string) => void] => {
  const [value, setValue] = useState('');

  const getItem = useCallback(() => {
    const response = localStorage.getItem(key);
    return response ?? '';
  }, [key]);

  const setItem = useCallback(
    (value: string) => {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    },
    [key],
  );

  useEffect(() => {
    setValue(getItem());
  }, [getItem]);

  return [value, setItem];
};

export { useLocalStorage };
