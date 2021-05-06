import reducer, * as actions from 'slices/modal'

describe('modal', () => {
	let state = reducer(undefined, {});


	beforeEach(() => {
		state = reducer(undefined, {});
	});


	it('should create actions.', () => {
		const payload = undefined;
		const expectedActions = [
			{ type: 'modal/pushModal', payload: { name: 'TestModal', args: undefined }},
			{ type: 'modal/popModal', payload },
			{ type: 'modal/deleteModal', payload: 'TestModal' },
			{ type: 'modal/clearModal', payload },
		];
		const modalActions = [
			actions.pushModal({ name: 'TestModal', args: undefined }),
			actions.popModal(),
			actions.deleteModal('TestModal'),
			actions.clearModal(),
		];
		expect(modalActions).toEqual(expectedActions);
	});


	describe('reducer', () => {
		it('should return the initialState.', () => {
			expect(state.modalList).toEqual([]);
		});


		it('should push a modal.', () => {
			const args = {'key': 'value'};
			state = reducer(state, actions.pushModal({ 
				name: 'TestModal', 
				args 
			}));
			expect(state.modalList[0]['name']).toBe('TestModal');
			expect(state.modalList[0]['args']).toEqual(args);
		});


		it('should pop a modal.', () => {
			const args = {'key': 'value'};
			state = reducer(state, actions.pushModal({ 
				name: 'TestModal', 
				args 
			}));
			state = reducer(state, actions.popModal());
			expect(state.modalList).toEqual([]);
		});


		it('should delete the modal.', () => {
			const args = {'key': 'value'};
			state = reducer(state, actions.pushModal({ 
				name: 'TestModal_1', 
				args 
			}));
			state = reducer(state, actions.pushModal({ 
				name: 'TestModal_2', 
				args 
			}));
			
			state = reducer(state, actions.deleteModal('TestModal_1'));
			expect(state.modalList[0]['name']).toBe('TestModal_2');
		});
	});
});