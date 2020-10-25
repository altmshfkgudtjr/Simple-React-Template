import produce from 'immer';

/*
	Thunk Actions
*/


/*
	Actions
*/
const PUSH_MODAL = 'modal/PUSH_MODAL';
const POP_MODAL = 'modal/POP_MODAL';
const DELETE_MODAL = 'modal/DELETE_MODAL';
const CLEAR_MODAL	= 'modal/CLEAR_MODAL';

export const pushModal = (id, elem, args) => ({ type: PUSH_MODAL, payload: {id, elem, args} });
export const popModal = () => ({ type: POP_MODAL });
export const deleteModal = (id) => ({ type: DELETE_MODAL, payload: id });
export const clearModal = () => ({ type: CLEAR_MODAL });


/*
	InitialState
*/
const initialState = {
	modalList: []
};


/*
	Reducer
*/
function modal(state = initialState, action) {
	switch(action.type) {
		case PUSH_MODAL:
			/* Modal push */
			return produce(state, draft => {
				draft.modalList.push(action.payload);
			});

		case POP_MODAL:
			/* Modal pop */
			return produce(state, draft => {
				const index = draft.modalList.length - 1;
				if (index >= 0) {
					draft.modalList.splice(index, 1);
				}
			});
		
		case DELETE_MODAL:
			/* Modal OFF */
			return produce(state, draft => {
				draft.modalList = draft.modalList.filter(modal => modal.id !== action.payload);
			});
		
		case CLEAR_MODAL:
			/* ALl Modal OFF */
			return produce(state, draft => {
				draft.modalList = [];
			});

		default:
			return state;
	}
}

export default modal