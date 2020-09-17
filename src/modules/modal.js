import { Map } from 'immutable'

/*
	Types
*/
const SHOW_MODAL = 'modal/SHOW_MODAL';	// Modal ON
const DROP_MODAL = 'modal/DROP_MODAL';	// Modal OFF
/*
	Actions
*/
export const showModal = (element)=> ({ type: SHOW_MODAL, payload: element });
export const dropModal = ()=> ({ type: DROP_MODAL});
/*
	InitialState
*/
const initialState = Map({
	element: null
});
/*
	Reducer
*/
export default function modal(state = initialState, action) {
	switch(action.type) {
		case SHOW_MODAL:
			// Modal ON
			document.querySelector('body').style.overflow = "hidden";
			return state.set('element', action.payload);
		case DROP_MODAL:
			// Modal OFF
			document.querySelector('body').removeAttribute('style');
			return state.set('element', null);
		default:
			// Do nothing
			return state;
	}
}