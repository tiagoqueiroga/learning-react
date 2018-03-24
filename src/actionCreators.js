import { SET_NEW_TASK } from './actions';

export function setNewTask(newTask) {
	return { type: SET_NEW_TASK, payload: newTask };
}
