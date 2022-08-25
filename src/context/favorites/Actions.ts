import { ActionTypes } from 'enums/ActionTypes';
import { Action } from './models';

const add = (payload: string): Action => ({ type: ActionTypes.ADD, payload });
const remove = (payload: string): Action => ({ type: ActionTypes.REMOVE, payload });

export { add, remove };
