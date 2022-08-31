import { ActionTypes } from 'enums/ActionTypes';
import { Action } from './models';


const add = (payload: string): Action => ({ type: ActionTypes.ADD, payload });

export { add };
