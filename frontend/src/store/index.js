//the store is the object that brings actions and reducers together
//the store has the following responsibilities:
    //hold app state
    //allow access to state via getState
    //allow state to be updated via dispatch(action)
    //register and unregister listeners vis subscribe(listener)
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(){
    const store  = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );

    return store;
}
