import { REGISTER_FORM } from './types';


export const registerForm = list =>  {
    console.log('data coming---------',list)
    return {
        type: REGISTER_FORM,
        payload: list
    }
}


