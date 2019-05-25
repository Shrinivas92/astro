import {
  NEW_USER, USER_LOGIN,
  
} from './types'
import axios from 'axios';
import { baseUrl } from '../../utils/utils';

//  the below block of code will be called when user click on signup button action is fired 
// and response status will be sent in payload

export const newUser = data => async dispatch=>{
  console.log("popsoospdjsjdkj")
  axios.post(`${baseUrl}/registor_user`, data)
  .then((res)=> {
    console.log('rav', res);
    dispatch({
      type: NEW_USER,
      payload: res.data.data.Status
    })
        console.log("response is", res)
  }) .catch ((error)=> {
    dispatch({
      type: error,
      payload:error.data.data
    })
      console.log('error====', error)
  })
}

// the below block of code will be called when user click on login button action is fired
// and access Token is send in payload

export const loginAction = data => async dispatch=>{
  console.log("popsoospdjsjdkj");
    axios.post(`${baseUrl}/login`, data, { timeout: 20000 })
  .then((res)=> {
    console.log('rav', res);
    dispatch({
      type: USER_LOGIN,
      payload: res.data.data
    })
        console.log("response is", res.response.data)
  }) .catch ((error)=> {
    dispatch({
      type: error,
      payload:error.data.data
    })
      console.log('error====', error)
  })
}
