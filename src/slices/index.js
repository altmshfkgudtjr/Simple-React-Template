import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
// reducers
import modal from 'slices/modal'
import snackbar from 'slices/snackbar'


/**
 * Combined Reducer
 */
const reducer = combineReducers({
	modal,
	snackbar
});


/**
 * Create store & Apply middlewares
 */
const store = configureStore({
	reducer
});

export default store
