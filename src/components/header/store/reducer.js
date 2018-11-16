import { HEADER_STATE } from './actionTypes';
// state默认值
const defaultState = {
	header_state: ''
}

export default (state = defaultState, action) => {
	if (action.type === HEADER_STATE) {
		console.log('childpage-reducer')
		const newState = JSON.parse(JSON.stringify(state));
		newState.header_state = action.data;
		return newState;
	}

	return state;
}
