//the store is the object that brings actions and reducers together
//the store has the following responsibilities:
    //hold app state
    //allow access to state via getState
    //allow state to be updated via dispatch(action)
    //register and unregister listeners vis subscribe(listener)
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {
    ADD_ERROR,
    REMOVE_ERROR,
    GET_CURRENT_USER
} from './actionTypes';

export function configureStore(){
    const store  = createStore(
        rootReducer, 
        compose(applyMiddleware(thunk))
    );

    return store;
}
