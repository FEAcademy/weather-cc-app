import { useCallback, useEffect, useState } from 'react';

const key = 'current_location';

const useLocalStorage = (defaultValue: string): [string, (value: string) => void] => {
  const [localValue, setLocalValue] = useState(defaultValue);

  const getItem = useCallback(() => {
    const value = localStorage.getItem(key);
    return value ? value : defaultValue;
  }, [defaultValue]);

  const setItem = useCallback((value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalValue(value);
  }, []);

  useEffect(() => {
    const item = getItem();
    if (item === defaultValue) setItem(defaultValue);
    else setLocalValue(item);
  }, [getItem, setLocalValue, setItem, defaultValue]);

  return [localValue, setItem];
};

export { useLocalStorage };
