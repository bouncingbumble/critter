import { SET_CURRENT_USER } from '../actionTypes';
//reducers specify how the application's state changes in response to actions sent to the store.
//Actions describe 'what happened', but don't describe how the application's state changes.
//
//What is the minimal representation of the state?
const DEFAULT_STATE = {
    isAuthenticated: false, //set to true when logged in
    user: {} //user info when logged in
};

//pass in user object to set logged in user or empty object to log a user out
export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER://if it is the set user ACTION then REDUCE the state in this way
            console.log(action.user);
            return {
                //true or false are there keys or no keys in this object
                isAuthenticated: !!Object.keys(action.user).length > 0,
                user: action.user
            };
        default:
            return state;
    }
}