import React from 'react'
import reducer, * as actions from 'modules/modal'

describe('modal', () => {
	let state = reducer(undefined, {});

	beforeEach(() => {
		state = reducer(undefined, {});
	});

	it('should create actions.', () => {
		const expectedActions = [
			{ type: 'modal/PUSH_MODAL', payload: {id: '', elem: null, args: undefined} },
			{ type: 'modal/POP_MODAL' },
			{ type: 'modal/DELETE_MODAL', payload: '' },
			{ type: 'modal/CLEAR_MODAL' },
		];
		const modalActions = [
			actions.pushModal('', null, undefined),
			actions.popModal(),
			actions.deleteModal(''),
			actions.clearModal(),
		];
		expect(modalActions).toEqual(expectedActions);
	});

	describe('reducer', () => {
		it('should return the initialState.', () => {
			expect(state.modalList).toEqual([]);
		});

		it('should push a modal.', () => {
			const elem = <div id="test-div" />;
			const args = {'key': 'value'};
			state = reducer(state, actions.pushModal('TEST', elem, args));
			expect(state.modalList[0]['id']).toBe('TEST');
			expect(state.modalList[0]['elem']).toEqual(elem);
			expect(state.modalList[0]['args']).toEqual(args);
		});

		it('should pop a modal.', () => {
			const elem = <div id="test-div" />;
			const args = {'key': 'value'};
			state = reducer(state, actions.pushModal('TEST', elem, args));
			
			state = reducer(state, actions.popModal());
			expect(state.modalList).toEqual([]);
		});

		it('should delete the modal.', () => {
			const elem = <div id="test-div" />;
			const args = {'key': 'value'};
			state = reducer(state, actions.pushModal('TEST_1', elem, args));
			state = reducer(state, actions.pushModal('TEST_2', elem, args));
			
			state = reducer(state, actions.deleteModal('TEST_1'));
			expect(state.modalList[0]['id']).toBe('TEST_2');
		});
	});
});