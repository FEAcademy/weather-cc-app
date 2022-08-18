import { useLocalStorage } from 'hooks/useLocalStorage';
import { useCallback } from 'react';
import { createContext, useContext, PropsWithChildren, useReducer, useEffect } from 'react';
import { favoritesReducer } from './FavoritesReducer';
import { State, Dispatch } from './models';

interface ContextProps {
  state: State;
  dispatch: Dispatch;
  checkIfIsFavorite: (city: string) => boolean;
}

const initialState: State = {
  favorites: [],
};

const FavoriteContext = createContext<ContextProps>({
  dispatch: () => {},
  state: initialState,
  checkIfIsFavorite: () => false,
});

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites');
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: favorites || [] });

  const checkIfIsFavorite = useCallback(
    (city: string): boolean => {
      return state.favorites.includes(city);
    },
    [state.favorites],
  );

  useEffect(() => {
    setFavorites(state.favorites);
  }, [state, setFavorites]);

  return <FavoriteContext.Provider value={{ state, dispatch, checkIfIsFavorite }}>{children}</FavoriteContext.Provider>;
};

const useFavorites = () => {
  const context = useContext(FavoriteContext);
  return context;
};

export { FavoritesProvider, useFavorites };
