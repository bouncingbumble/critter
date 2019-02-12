import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
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

export const removeMessage = (user_id, message_id) => {
    return dispatch => {
        return apiCall("delete", `/api/user/${user_id}/message/${message_id}`
        ).then(() => {
            dispatch(remove(message_id))
        }).catch(err => dispatch(addError(err.message)))
    }
}