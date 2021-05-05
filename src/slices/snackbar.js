import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const RefEvent = [];

/* 
	Thunks
*/
/** 
 * Init snackbar
 * @param {"SUCCESS" | "WARNING" | "ERROR" | "INFO"} type snackbar type
 * @param {string} message snackbar text
 */
export const newSnackbar = createAsyncThunk(
	'snackbar/newSnackbar',
	async (
		{ type, message }, 
		{ dispatch }
	) => {
		if(RefEvent.length !== 0) {
			let event = RefEvent.shift();
			clearTimeout(event);
		}
		dispatch(deleteSnackbar());
		await setTimeout(function() {
			dispatch(appendSnackbar({ message, type: type ? type : "INFO" }));
			let event = window.setTimeout(function() {
				dispatch(deleteSnackbar());
			}, 4000);
			RefEvent.push(event);
		}, 50);
	}
);


/* 
	Initial State
*/
const initialState = {
	type: "INFO",
	message: ""
}


/* 
	Slice
*/
const SnackbarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		/** Snackbar update */
		appendSnackbar(state, action) {
			state.type = action.payload.type;
			state.message = action.payload.message;
		},
		/** Snackbar clear */
		deleteSnackbar(state) {
			state.type = "INFO"
			state.message = "";
		}
	}
});


export const {
	appendSnackbar,
	deleteSnackbar
} = SnackbarSlice.actions

export default SnackbarSlice.reducer