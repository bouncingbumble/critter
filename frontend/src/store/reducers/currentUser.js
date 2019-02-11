import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false, //set to true when logged in
    user: {} //user info when logged in
};

//pass in user object to set logged in user or empty object to log a user out
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                //true or false are there keys or no keys in this object
                isAuthenticated: !!Object.keys(action.user).length > 0,
                user: action.user
            };
        default:
            return state;
    }
}