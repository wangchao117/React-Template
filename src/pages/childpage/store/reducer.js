import { CHILDPAGE_STATE } from './actionTypes';
// state默认值
const defaultState = {
	childpage_state: ''
}

export default (state = defaultState, action) => {
	if (action.type === CHILDPAGE_STATE) {
		console.log('childpage-reducer')
		const newState = JSON.parse(JSON.stringify(state));
		newState.childpage_state = action.data;
		return newState;
	}

	return state;
}
