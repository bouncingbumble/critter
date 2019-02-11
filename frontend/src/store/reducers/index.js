import { combineReducers } from "redux";

//reducers specify how the application's state changes in response to actions sent to the store.
//Actions describe 'what happened', but don't describe how the application's state changes.
//
//What is the minimal representation of the state?
var initialState = {
    currentUser: {},
    recentTweets: []
};