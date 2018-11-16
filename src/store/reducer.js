import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as childpageReducer } from '../pages/childpage/store';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	childpage: childpageReducer
});

export default reducer;
