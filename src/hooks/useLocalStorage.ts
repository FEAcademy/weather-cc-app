import { useEffect, useState } from 'react';

const getItem = (key: string): string | null => localStorage.getItem(key);

const setItem = (key: string, value: string) => localStorage.setItem(key, value);

const useLocalStorage = (key: string): [string | null, (value: string) => void] => {
  const [localValue, setLocalValue] = useState<string | null>(() => getItem(key));

  useEffect(() => {
    localValue && setItem(key, localValue);
  }, [key, localValue]);

  return [localValue, setLocalValue];
};

export { useLocalStorage };