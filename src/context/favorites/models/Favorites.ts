import { ActionTypes } from 'enums/ActionTypes';

type Action = { type: ActionTypes; payload: string };
type Dispatch = (action: Action) => void;
type State = { favorites: string[] };

export type { Action, Dispatch, State };
