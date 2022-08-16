import { ActionTypes } from 'enums/ActionTypes';
import { Action } from './models';

const ADD = (payload: string): Action => ({ type: ActionTypes.ADD, payload });

export { ADD };
