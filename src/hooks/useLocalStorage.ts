import { useEffect, useState } from 'react';

const getItem = (key: string) => localStorage.getItem(key) || '';

const setItem = (key: string, value: string) => localStorage.setItem(key, value);

const useLocalStorage = (key: string): [string, (value: string) => void] => {
  const [localValue, setLocalValue] = useState(() => getItem(key));

  useEffect(() => {
    localValue && setItem(key, localValue);
  }, [key, localValue]);

  return [localValue, setLocalValue];
};

export { useLocalStorage };
