import { authenticationConstants } from "../_constants";

const initialState = {loginRequest: false, user: null};

export const authentication = (state = initialState,action) => {
    
    const {type,user,error} = action;

    switch (type) {
        case authenticationConstants.LOGIN_REQUEST:
            
            return {...state, loginRequest: true};
        case authenticationConstants.LOGIN_SUCCESS:
            
            return {...state, loginRequest: false,user};
        case authenticationConstants.LOGIN_FAILED:
            
            return {...state, loginRequest: false,error};


        default:
            return state;
    }
}