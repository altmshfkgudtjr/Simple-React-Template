import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// containers
import * as modals from 'containers/modal/index'
// components
import Background from 'components/modal/Background'
// modules
import { popModal, deleteModal } from 'slices/modal'

const Modal = ()=> {
	const dispatch = useDispatch();
	const modalList = useSelector(state => state.modal.modalList);

	const isShow = modalList.length !== 0;
	

	const PreventModalOff = e => e.stopPropagation();

	const onMouseDown = name => dispatch(deleteModal(name));

	const ModalList = modalList.map(modal => {
		const Content = modals[modal.name];
		return (
			<Content 
				key={modal['name']}
				PreventModalOff={PreventModalOff}
				ModalOff={() => { onMouseDown(modal['name']) }}
				args={modal['args']}
			/>
		);
	});


	useEffect(() => {
		if (isShow) {
			document.querySelector('body').style.overflow = 'hidden';
		} else {
			document.querySelector('body').removeAttribute('style');
		}
	}, [isShow]);


	return (
		<>
			{isShow && <Background onMouseDown={() => { dispatch(popModal()) }}>
				{ModalList}
			</Background>}
		</>
	);
}


export default Modal