import { useState } from 'react';

const getItem = (): string[] | null => JSON.parse(localStorage.getItem('favorites') || 'null');

const setItem = (value: string[]) => localStorage.setItem('favorites', JSON.stringify(value));

const useFavorites = () => {
  const [localValue, setLocalValue] = useState<null | string[]>(() => getItem());

  const setFavorites = (city: string) => {
    if (!localValue) {
      setLocalValue([city]);
      setItem([city]);
    } else {
      if (localValue.includes(city)) return;
      setLocalValue([...localValue, city]);
      setItem([...localValue, city]);
    }
  };

  return {
    favorites: localValue,
    setFavorites,
  };
};

export { useFavorites };
