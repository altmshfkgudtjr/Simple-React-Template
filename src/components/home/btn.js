import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// containers
import InfoModal from '../../containers/modal/info'
// modules
import { showModal } from '../../modules/modal'
// lib
import { transition } from '../../lib/styles/styles'
import palette from '../../lib/styles/palette'

/*
	:::: Styles ::::
*/
const Button = styled.button`
	position: relative;
	width: 80px;
	font-size: 14px;
	line-height: 24px;
	background-color: rgba(0,0,0,0);
	border: 1.8px solid white;
	border-radius: 2rem;
	margin: 1rem .5rem .5rem 5vw;
	font-weight: 600;
	text-align: center;
	color: #fefefe;
	transition: .2s ${transition}; 

	&:hover {
		background-color: ${palette.blue4};
		border: 1.8px solid ${palette.blue4};
	}
`;

/*
	:::: Store States ::::
*/
const Btn = ({ showModal }) => {
	const modalOn = () => showModal(InfoModal);

	return <Button onClick={modalOn}>Simple</Button>
}

let mapDispatchToProps = (dispatch) => {
	return {
		showModal: (elem)=> dispatch(showModal(elem))
	};
}

export default connect(undefined, mapDispatchToProps) (Btn)