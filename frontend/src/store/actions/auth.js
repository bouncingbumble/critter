import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

//application maps state to props and then uses actions to dispatch data to the reducers that update the state

                //      app   > pass down actions from containers to components > components send data to actions
                //       ^                                                                      v
                //map state to props                                              actions store.dispatch
                //       ^                                                                      v  
                //     store                       < < <                        store calls appropriate reducers to update state



//actions are payloads of information that send data from the application to the store
//actions are the only source of information for the store

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function setAuthorizationToken(token) {
    setTokenHeader(token);
}

export function signout() {
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/auth/${type}`, userData)
                .then(({ token, ...user }) => {
                    localStorage.setItem("jwtToken", token);
                    setAuthorizationToken(token);
                    dispatch(setCurrentUser(user));
                    dispatch(removeError());
                    resolve();
                })
                .catch(err => {
                    dispatch(addError(err.message));
                    reject();
                })
        })
    }
}