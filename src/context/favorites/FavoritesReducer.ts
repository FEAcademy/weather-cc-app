import { ActionTypes } from 'enums/ActionTypes';
import { Action, State } from './models';

const favoritesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return { favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export { favoritesReducer };
