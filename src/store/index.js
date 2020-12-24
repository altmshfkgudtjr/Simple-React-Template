import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import modal from 'modules/modal'
import snackbar from 'modules/snackbar'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	modal,
	snackbar
});

/* 
	Create Store
*/
const store = createStore(
	reducers,
	applyMiddleware(ReduxThunk)
);

export default store