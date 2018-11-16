import { HEADER_STATE } from './actionTypes';
import axios from 'axios';

// 异步获取数据
export const changeHeaderState = (data) => {
  return {
    type: HEADER_STATE,
    data
  }
}

export const asyncGet = () => {
  return (dispatch, getState) => {
    // axios.get('/list.json').then((res) => {
	// 		console.log(res);
	// 		const data = res.data;
			const action = changeHeaderState('改变header-state');
			dispatch(action);
		// }).catch((error) => {
		// 	console.log(error)
		// })
  }
}
