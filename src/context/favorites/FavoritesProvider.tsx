import { createContext, useContext, PropsWithChildren, useReducer } from 'react';
import { favoritesReducer } from './FavoritesReducer';
import { State, Dispatch } from './models';

const FavoriteContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const getItem = (): string[] | null => JSON.parse(localStorage.getItem('favorites') || 'null');

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(favoritesReducer, { favorites: getItem() });

  return <FavoriteContext.Provider value={{ state, dispatch }}>{children}</FavoriteContext.Provider>;
};

const useFavorites = () => {
  const context = useContext(FavoriteContext);
  return context;
};

export { FavoritesProvider, useFavorites };
