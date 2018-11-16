import { HOME_STATE } from './actionTypes';
import axios from 'axios';

// 异步获取数据
export const changeHomeState = (data) => {
  return {
    type: HOME_STATE,
    data
  }
}

export const asyncGet = () => {
  return (dispatch, getState) => {
    axios.get('/ycorrect/user/login?username=七八九九&password=123456').then((res) => {
			console.log(res);
			const data = res.data;
			const action = changeHomeState(data);
			dispatch(action);
		}).catch((error) => {
			console.log(error)
		})
  }
}
