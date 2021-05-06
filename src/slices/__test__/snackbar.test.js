import reducer, * as actions from '../snackbar'

describe('snackbar', () => {
	let state = reducer(undefined, {});


	beforeEach(() => {
		state = reducer(undefined, {});
	});


	it('should create actions', () => {
		const payload = undefined;
		const expectedActions = [
			{ type: 'snackbar/appendSnackbar', payload },
			{ type: 'snackbar/deleteSnackbar', payload },
		];
		const snackbarActions = [
			actions.appendSnackbar(),
			actions.deleteSnackbar(),
		];
		expect(snackbarActions).toEqual(expectedActions);
	});


	describe('reducer', () => {
		it ('should return the initialState.', () => {
			expect(state).toEqual({
				type: 'INFO',
				message: ''
			});
		});


		it('should change init snackbar.', () => {
			state = reducer(state, actions.appendSnackbar({
				type: 'SUCCESS',
				message: 'snackbar test'
			}));
			expect(state.message).toBe('snackbar test');
			expect(state.type).toBe('SUCCESS');
		});


		it('should change delete snackbar.', () => {
			state = reducer(state, actions.deleteSnackbar());
			expect(state.message).toBe('');
			expect(state.type).toBe('INFO');
		});
	});
});