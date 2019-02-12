import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall('get', '/api/messages/all')
        .then(res => {
            dispatch(loadMessages(res))
        })
        .catch(err => {
            dispatch(addError(err.message))
        });
    };
};

export const postMessage = text => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;

    return apiCall("post", `/api/user/${id}/message`, { message: text })
        .then(res => {})
        .catch(err => dispatch(addError(err.message)));
};