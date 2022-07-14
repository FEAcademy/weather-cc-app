import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string): [string, (value: string) => void] => {
  const [value, setValue] = useState('');

  const getItem = useCallback(() => {
    const resp = localStorage.getItem(key);
    return resp ?? '';
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
