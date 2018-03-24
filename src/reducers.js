import { SET_NEW_TASK } from './actions';

const DEFAULT_STATE = {
	newTask: ''
};

const setNewTask = (state, action) => {
	return Object.assign({}, state, { newTask: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_NEW_TASK:
			return setNewTask(state, action);
		default:
			return state;
	}
};

export default rootReducer;
