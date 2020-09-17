import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
// modules
import { dropModal } from '../../modules/modal'
// lib
import zIndex from '../../lib/styles/zIndex'
import animations from '../../lib/styles/animations'

/*
	:::: Styles ::::
*/
const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(249, 249, 249, 0.85);	// Set background color
	z-index: ${zIndex.modal};
	animation: ${animations.fadeIn} .2s;
`;

/*
	:::: State Info ::::
*/
const Modal = ({element, dropModal})=> {
	const Content = element;
	const PreventModalOff = e => e.stopPropagation();
	return (
		<>
			{!!element && <ModalBackground onMouseDown={dropModal}>
				<Content PreventModalOff={PreventModalOff}
								 ModalOff={dropModal}>
				</Content>
			</ModalBackground>}
		</>
	);
}


/*
		:::: Store States ::::
*/
let mapStateToProps = (state) => {
	return {
		element: state.modal.get('element')
	};
}

/*
		:::: Reducer Actions ::::
*/
let mapDispatchToProps = (dispatch)=> {
	return {
		dropModal: ()=> dispatch(dropModal())
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal)