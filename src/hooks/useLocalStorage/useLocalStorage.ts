import { useEffect, useState } from 'react';

const getItem = <T>(key: string): T | null => JSON.parse(localStorage.getItem(key) || 'null');

const setItem = <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value));

const useLocalStorage = <T extends {}>(key: string): [T | null, (value: T) => void] => {
  const [localValue, setLocalValue] = useState<T | null>(() => getItem<T>(key));

  useEffect(() => {
    localValue && setItem(key, localValue);
  }, [key, localValue]);

  return [localValue, setLocalValue];
};

export { useLocalStorage };
