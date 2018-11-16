import { HOME_STATE } from './actionTypes';
// state默认值
const defaultState = {
	home_state: '111111'
}

export default (state = defaultState, action) => {
	if (action.type === HOME_STATE) {
		console.log('home-reducer')
		const newState = JSON.parse(JSON.stringify(state));
		newState.home_state = action.data;
		return newState;
	}

	return state;
}
