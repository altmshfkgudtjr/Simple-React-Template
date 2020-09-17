import React from 'react'
import modal, * as modalActions from '../modal'

describe('modal', () => {
	it('should create actions.', () => {
		const expectedActions = [
			{ type: 'modal/SHOW_MODAL' },
			{ type: 'modal/DROP_MODAL' }
		];
		const actions = [
			modalActions.showModal(),
			modalActions.dropModal()
		];
		expect(actions).toEqual(expectedActions);
	});

	describe('reducer', () => {
		let state = modal(undefined, {});

		it('should return the initialState', () => {
			expect(state.get('element')).toBe(null);
		});

		it('should append a modal.', () => {
			const el = <div id="test-div"></div>;
			state = modal(state, modalActions.showModal(el));
			expect(state.get('element')).toEqual(el);
		});

		it('should delete a modal.', () => {
			state = modal(state, modalActions.dropModal());
			expect(state.get('element')).toBe(null);
		});
	});
});