import { createSlice } from '@reduxjs/toolkit'


/*
	Thunks
*/


/*
	InitialState
*/
const initialState = {
	modalList: []
};


/*
	Slice
*/
const ModalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		/* Modal push */
		pushModal(state, action) {
			const filtered = state.modalList.filter(modal => modal.name === action.payload.name);
			if (filtered.length > 0) return;
			state.modalList.push(action.payload);
		},
		/* Modal pop */
		popModal(state) {
			const index = state.modalList.length - 1;
			if (index >= 0) {
				state.modalList.splice(index, 1);
			}
		},
		/* Modal OFF */
		deleteModal(state, action) {
			state.modalList = state.modalList.filter(modal => modal.name !== action.payload);
		},
		/* ALl Modal OFF */
		clearModal(state) {
			state.modalList = [];
		}
	}
});


export const {
	pushModal,
	popModal,
	deleteModal,
	clearModal
} = ModalSlice.actions

export default ModalSlice.reducer