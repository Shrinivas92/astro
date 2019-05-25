import { REGISTER_FORM, NEW_USER, USER_LOGIN} from '../actions/types'

const initialState = {

    registerForm: [],
    newUser:[],
    userData:[],
    loginUser: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        // below block of code store the action.payload having response status data in userData
        case NEW_USER: 
        console.log('payload', action.payload)
        return {
            ...state,
            userData: action.payload
        }

        // below block of code store the action.payload having response access token data in loginUser
        case USER_LOGIN: 
        console.log('payload', action.payload)
        return {
            ...state,
            loginUser: action.payload
        }

        default:
            return state;
    }
}

