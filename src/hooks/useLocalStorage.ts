import { useEffect, useState } from 'react';

const getItem = (key: string) => localStorage.getItem(key);

const setItem = (key: string, value: string) => localStorage.setItem(key, JSON.stringify(value));

const getInitialState = (key: string, defaultValue: string) => getItem(key) || defaultValue;

const useLocalStorage = (key: string, defaultValue: string): [string, (value: string) => void] => {
  const [localValue, setLocalValue] = useState(() => getInitialState(key, defaultValue));

  useEffect(() => {
    setItem(key, localValue);
  }, [key, localValue]);

  return [localValue, setLocalValue];
};

export { useLocalStorage };
