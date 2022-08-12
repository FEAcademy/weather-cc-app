import { useLocalStorage } from 'hooks/useLocalStorage';
import { createContext, useContext, PropsWithChildren, useReducer, useEffect } from 'react';
import { favoritesReducer } from './FavoritesReducer';
import { State, Dispatch } from './models';

interface ContextProps {
  state: State;
  dispatch: Dispatch;
}

const FavoriteContext = createContext<ContextProps | undefined>(undefined);

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites');
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: favorites || [] });

  useEffect(() => {
    setFavorites(state.favorites);
  }, [state, setFavorites]);

  return <FavoriteContext.Provider value={{ state, dispatch }}>{children}</FavoriteContext.Provider>;
};

const useFavorites = () => {
  const context = useContext(FavoriteContext);
  return context;
};

export { FavoritesProvider, useFavorites };
