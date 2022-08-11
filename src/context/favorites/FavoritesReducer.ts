/* eslint-disable indent */
import { Action, State } from './models';

const setItem = (value: string[]) => localStorage.setItem('favorites', JSON.stringify(value));

const favoritesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add': {
      if (!state.favorites) {
        setItem([action.payload]);
        return { favorites: [action.payload] };
      } else {
        if (state.favorites.includes(action.payload)) return state;
        setItem([...state.favorites, action.payload]);
        return { favorites: [...state.favorites, action.payload] };
      }
    }
    default: {
      return state;
    }
  }
};

export { favoritesReducer };
