type Action = { type: 'add'; payload: string };
type Dispatch = (action: Action) => void;
type State = { favorites: string[] };

export type { Action, Dispatch, State };
